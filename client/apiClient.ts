import request from 'superagent'
import { Welcome } from '../models/welcome.ts'

const serverURL = '/api/v1'

// *** EXAMPLE ***
export function getWelcome(): Promise<Welcome> {
  return request.get(`${serverURL}/welcome`).then((response) => response.body)
}
// ***   ***   ***

export async function getPokemon(){
  const response = await request.get(`https://pokeapi.co/api/v2/pokemon/ditto`)
  console.log(response.body)
  return response.body
}
