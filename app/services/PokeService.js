import { AppState } from "../AppState.js"
import { Pokeman } from "../models/Pokermans.js"
import { pokeApi } from "./AxiosService.js"



class PokeService {

    async getPokemen() {
        const response = await pokeApi.get('api/v2/pokemon')

        const newPokemen = response.data.map(pokePojo => new Pokeman(pokePojo))

        AppState.pokemen = newPokemen
    }


    constructor() {

    }

}






export const pokeService = new PokeService()