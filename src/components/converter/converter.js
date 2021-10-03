import React, {Component} from 'react';
import './converter.css';
import withService from "../with-service/with-service";

class Converter extends Component {

    state = {
        rates: null,
        amount: 0
    }

    componentDidMount() {
        this.props.getData()
            .then((data) => {
                this.setState({
                    rates: data.rates
                })
            })
    }

    updateCourses = () => {
        const input = document.getElementById('sum');
        const firstSelect = document.getElementById('first-course');
        const secondSelect = document.getElementById('second-course');

        const firstCourse = firstSelect.options[firstSelect.selectedIndex].value;
        const secondCourse = secondSelect.options[secondSelect.selectedIndex].value;
        const amount = input.value;

        if (firstCourse === secondCourse) {
            this.setState({
                amount: amount
            })
        } else {

            console.log(firstCourse, secondCourse);
            this.props.getConvert(firstCourse, secondCourse, amount)
                .then((data) => {
                    console.log(data);
                    // this.setState({
                    //     amount: data.info.rate
                    // })
                })

        }
    }

    render() {

        if (!this.state.rates) {
            return <h3>...</h3>
        }

        const rates = Object.entries(this.state.rates);
        const amount = this.state.amount;

        const options = rates.map((item) => {
            return <option key={item[0]} value={item[0]}>{item[0]}</option>;
        })

        return (
            <div className="converter">
                <h1>Конвертер</h1>
                <form id="convert" onChange={this.updateCourses}>
                    <label>ВВЕДИТЕ СУММУ </label>
                    <input name="sum" id="sum" type="text" />
                    <select id="first-course">
                        {options}
                    </select>
                    <select id="second-course">
                        {options}
                    </select>
                </form>
                <div>{amount}</div>
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