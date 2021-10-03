import React from "react";
import {ExchangeServiceConsumer} from "../exchange-service-context";

const withService = (Wrapped) => {
    return (props) => {
        return (
            <ExchangeServiceConsumer>
                {
                    (exchangeService) => {

                        return (
                            <Wrapped {...props} getData={exchangeService.getAllRates} />
                        );
                    }
                }
            </ExchangeServiceConsumer>
        )
    }
}

export default withService;