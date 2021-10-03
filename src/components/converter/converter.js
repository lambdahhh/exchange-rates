import React, {Component} from 'react';
import './converter.css';
import withService from "../with-service/with-service";
import ErrorModule from "../error-module";

class Converter extends Component {

    state = {
        rates: null,
        amount: 0,
        error: false,
        errorInfo: ''
    }

    componentDidMount() {
        this.props.getData()
            .then((data) => {
                this.setState({
                    rates: data.quotes
                })
            })
    }

    updateCourses = () => {
        const input = document.getElementById('sum');
        const firstSelect = document.getElementById('first-course');
        const secondSelect = document.getElementById('second-course');

        const firstCourse = firstSelect.options[firstSelect.selectedIndex].value;
        const secondCourse = secondSelect.options[secondSelect.selectedIndex].value;
        const amount = Number(input.value);

        if (firstCourse === secondCourse) {
            this.setState({
                amount: amount
            })
        } else if (firstCourse !== secondCourse && amount !== 0) {

            this.props.getConvert(firstCourse, secondCourse, amount)
                .then((data) => {
                    if (data.error !== 200) {
                        this.setState({
                            error: true,
                            errorInfo: data.error.info
                        })
                    }
                    this.setState({
                        amount: data.result
                    })
                })

        }
    }

    render() {

        if (!this.state.rates) {
            return <h3>...</h3>
        }

        if (this.state.error) {
            return <ErrorModule errorInfo={this.state.errorInfo} />
        }

        const rates = Object.entries(this.state.rates);
        const amount = this.state.amount;

        const options = rates.map((item) => {
            return <option key={item[0]} value={item[0]}>{item[0].slice(3)}</option>;
        })

        return (
            <div className="converter">
                <h1>Конвертер</h1>
                <form id="convert" onChange={this.updateCourses}>
                    <div className="converter-form">
                        <div>
                            <select className="form-select" id="first-course">
                                {options}
                            </select>
                        </div>
                        <div>
                            <select className="form-select" id="second-course">
                                {options}
                            </select>
                        </div>
                        <div>
                            <input className="form-control" name="sum" id="sum" type="text" />
                        </div>
                    </div>
                </form>
                <div className="amount-field">{amount}</div>
            </div>
        );
    }
};

const methodProps = (exchangeService) => {
    return {
        getData: exchangeService.getAllRates,
        getConvert: exchangeService.getConvert
    }
}

export default withService(Converter, methodProps);