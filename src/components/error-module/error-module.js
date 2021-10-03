import './error-module.css';

const ErrorModule = (props) => {

    const {errorInfo} = props;

    return (
        <div className="error">
            {errorInfo}
        </div>
    )
}

export default ErrorModule;