import { AppState } from "../AppState.js"
import { Pokeman } from "../models/Pokermans.js"
import { pokeService } from "../services/PokeService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawPokemonCards() {
    const cards = AppState.pokemen
    let htmlString = ''
    cards.forEach(card => htmlString += card.SelectablePokemanBox)
    setHTML('pokeCards', htmlString)

}

function _drawSpecialPokemon() {
    const special = AppState.specialPokemon
    setHTML('pokeDepthInfo', special.depthInfoForPokemon)
}



export class PokeController {

    constructor() {
        this.getPokemenToShow()
        AppState.on('pokemen', _drawPokemonCards)
        AppState.on('specialPokemon', _drawSpecialPokemon)

    }

    async getPokemenToShow() {
        try {
            await pokeService.getPokemen()
            Pop.success
        } catch (error) {
            Pop.error(error)
        }
    }

    async pullDepthInfo(pokeName) {

        try {
            await pokeService.getDepthInfo(pokeName)
            Pop.success
        } catch (error) {
            Pop.error(error)

        }
    }

}