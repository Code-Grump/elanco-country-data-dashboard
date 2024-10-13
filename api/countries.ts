import { Request, Response } from "express";
import { RestCountriesApiClient } from "./rest-countries-api";

class CountriesController {

    client: RestCountriesApiClient

    constructor(client: RestCountriesApiClient) {
        this.client = client;
    }

    async getAll(req: Request, res: Response) {
        const countries = await this.client.fetchAll();

        res.send(countries);
    }

    async getByCode(req: Request, res: Response) {
        throw new Error('Method not implemented.');
    }

    async getInRegion(req: Request, res: Response) {
        throw new Error('Method not implemented.');
    }

    async search(req: Request, res: Response) {
        throw new Error('Method not implemented.');
    }

}

export default new CountriesController(new RestCountriesApiClient());