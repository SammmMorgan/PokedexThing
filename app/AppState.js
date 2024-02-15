import { Pokeman } from './models/Pokermans.js'
import { SpecialPokemon } from './models/SpecialPokeman.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null


  /**@type {Pokeman[] | null} */
  pokemen = []

  specialPokemon = {}
}

export const AppState = createObservableProxy(new ObservableAppState())