//API requests

import request from 'superagent'

const personURL = 'https://swapi.dev/api/people/5'
const planetURL = 'https://swapi.dev/api/planets/2/'

export async function getStarWarsPersonApi() {
  const response = await request.get(personURL)
  return response.body
}

export async function getStarWarsPlanetApi() {
  const response = await request.get(planetURL)
  return response.body
}
