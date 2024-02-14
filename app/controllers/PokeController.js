import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js"

function _drawPokemonCards() {
    const cards = AppState.pokemen
    let htmlString = ''
    cards.forEach(card => htmlString += card.SelectablePokemanBox)
    setHTML('pokeCards', htmlString)

}



export class PokeController {

    constructor() {
        AppState.on('pokemen', _drawPokemonCards)

    }

}