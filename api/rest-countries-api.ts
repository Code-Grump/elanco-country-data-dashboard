import axios from 'axios'

export class RestCountriesApiClient {
    async fetchAll() : Promise<Country[]> {
        const countries = await axios.get<any[]>('https://restcountries.com/v3.1/all');

        return countries.data.map<Country>(country => ({
            code: country.cca2,
            name: country.name.common,
            languages: country.languages.values(),
            population: country.population,
            flag: country.flag,
            region: country.region,
            currencies: country.currencies.keys()
        }));
    }
}

type Country = {
    code: string,
    name: string,
    languages: string[],
    population: number,
    flag: string,
    region: string,
    currencies: string
}