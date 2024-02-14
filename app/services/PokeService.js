import { AppState } from "../AppState.js"
import { Pokeman } from "../models/Pokermans.js"
import { pokeApi } from "./AxiosService.js"



class PokeService {

    async getPokemen() {
        const response = await pokeApi.get()

        console.log(response);
        const newPokemen = response.data.results.map(pokePojo => new Pokeman(pokePojo))

        AppState.pokemen = newPokemen
    }


    constructor() {

    }

}






export const pokeService = new PokeService()