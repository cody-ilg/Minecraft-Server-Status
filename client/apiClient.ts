import request from 'superagent'
import { Welcome } from '../models/welcome.ts'
import { Pokemon } from '../../models/Pokemon.ts'
import { Starwars } from '../models/starwars.js' 
import 'dotenv/config'
const serverURL = '/api/v1'

// *** EXAMPLE ***
export function getWelcome(): Promise<Welcome> {
  return request.get(`${serverURL}/welcome`).then((response) => response.body)
}
// // ***   ***   ***

export async function getPokemon(): Promise<Pokemon>{
  const response = await request.get(`https://pokeapi.co/api/v2/pokemon/scyther`)
  console.log(response.body)
  return response.body
}
// https://raw.githubusercontent.com/PokeAPI/sprites/master/https:/raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png

export async function getStarwars(): Promise<Starwars>{
  const response = await request.get(`https://swapi.dev/api/people/1/`)
  return response.body
}

export async function getLOTRQuote(): Promise<LOTR>{
  const response = await request
  .get(`https://the-one-api.dev/v2/character/2/quote`)
  .set('Authorization', 'Bearer ' + process.env.LOTR_API_TOKEN)
  return response.body
}