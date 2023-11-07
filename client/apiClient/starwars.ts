//API requests

import request from 'superagent'
import { Starwars } from '../../models/Starwars.ts'

const serverURL = 'https://swapi.dev/api/people/5/'

export async function getStarWarsApi() {
  const response = await request.get(serverURL)
  return response.body
}
