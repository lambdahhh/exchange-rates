
export default class ExchangeService {

    _apiBase = 'http://data.fixer.io/api';
    _apiKey = '739a34da3572bd5102f30773980e8261';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}?access_key=${this._apiKey}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url} received ${res.status}`);
        }
        return await res.json();
    }

    getAllRates = async () => {
        return await this.getResource(`/latest`);
    }

}