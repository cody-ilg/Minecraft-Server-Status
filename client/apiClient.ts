import request from 'superagent'
import { Welcome } from '../models/welcome.ts'

import { Pokemon } from '../models/Pokemon.ts'

const serverURL = '/api/v1'

// *** EXAMPLE ***
export function getWelcome(): Promise<Welcome> {
  return request.get(`${serverURL}/welcome`).then((response) => response.body)
}
// ***   ***   ***

export async function getPokemonApi(): Promise<Pokemon> {
  return await request
    .get('https://pokeapi.co/api/v2/pokemon/snorlax')
    .then((response) => response.body)
}
