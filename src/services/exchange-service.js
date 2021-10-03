
export default class ExchangeService {

    _apiBase = 'http://data.fixer.io/api';
    _apiConvert = 'https://api.coingate.com/v2/rates/merchant';
    _apiKey = '739a34da3572bd5102f30773980e8261';
    _apiSymbols = 'symbols=EUR,RUB,USD,GBP,JPY,AUD,BRL,DKK,ILS,CNY,CAD,NOK,SGD,CHF,SEK';

    getAllRates = async () => {
        const res = await fetch(`${this._apiBase}/latest?access_key=${this._apiKey}&${this._apiSymbols}`);

        if (!res.ok) {
            throw new Error(`Could not fetch /latest received ${res.status}`);
        }
        return await res.json();
    }

    getConvert = async (first, second) => {
        // const res = await fetch(`${this._apiConvert}/${first}/${second}/`);
        const res = await fetch(`https://api.coingate.com/v2/rates/merchant/EUR/RUB`);
        console.log('res', res);
        if (!res.ok) {
            throw new Error(`Could not fetch /convert received ${res.status}`);
        }
        return await res.json();
    }

}