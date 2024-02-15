import { AppState } from "../AppState.js"
import { Pokeman } from "../models/Pokermans.js"
import { SpecialPokemon } from "../models/SpecialPokeman.js"
import { pokeApi } from "./AxiosService.js"



class PokeService {


    async getDepthInfo(pokeName) {
        // debugger
        const response = await pokeApi.get(`/${pokeName}`)
        console.log(response.data);
        const deepPokeCard = new SpecialPokemon(response.data)
        console.log(deepPokeCard);
        AppState.specialPokemon = deepPokeCard

    }

    async getPokemen() {
        const response = await pokeApi.get('/?limit=9')

        console.log(response);
        const newPokemen = response.data.results.map(pokePojo => new Pokeman(pokePojo))

        AppState.pokemen = newPokemen
    }


    constructor() {

    }

}






export const pokeService = new PokeService()