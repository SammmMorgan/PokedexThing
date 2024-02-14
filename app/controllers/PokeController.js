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



export class PokeController {

    constructor() {
        this.getPokemenToShow()
        AppState.on('pokemen', _drawPokemonCards)

    }

    async getPokemenToShow() {
        try {
            await pokeService.getPokemen()
            Pop.success
        } catch (error) {
            Pop.error(error)
        }
    }

}