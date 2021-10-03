
export default class ExchangeService {

    _apiBase = 'http://apilayer.net/api';
    _apiKey = 'd439797acc5f91bd692c1ba81e9e36d9';
    _apiSymbols = 'EUR,RUB,USD,GBP,JPY,AUD,BRL,DKK,ILS,CNY,CAD,NOK,SGD,CHF,SEK';

    getAllRates = async () => {
        const res = await fetch(`${this._apiBase}/live?access_key=${this._apiKey}&currencies=${this._apiSymbols}`);

        if (!res.ok) {
            throw new Error(`Could not fetch /latest received ${res.status}`);
        }
        return await res.json();
    }

    getConvert = async (first, second, amount) => {
        const res = await fetch(`${this._apiBase}/convert?access_key=${this._apiKey}&from=${first}&to=${second}&amount=${amount}`);

        if (!res.ok) {
            throw new Error(`Could not fetch /convert received ${res.status}`);
        }
        return await res.json();
    }

}