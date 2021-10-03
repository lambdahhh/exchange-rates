import React from "react";
import {ExchangeServiceConsumer} from "../exchange-service-context";

const withService = (Wrapped, methodProps) => {
    return (props) => {
        return (
            <ExchangeServiceConsumer>
                {
                    (exchangeService) => {

                        const method = methodProps(exchangeService);
                        return (
                            <Wrapped {...props} getData={method.getData} getConvert={method.getConvert} />
                        );
                    }
                }
            </ExchangeServiceConsumer>
        )
    }
}

export default withService;