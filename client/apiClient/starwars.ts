//API requests

import request from 'superagent'

const personURL = 'https://swapi.dev/api/people/'
const planetURL = 'https://swapi.dev/api/planets/'

export async function getStarWarsPeopleApi() {
  const response = await request.get(personURL)
  return response.body
}

export async function getStarWarsPlanetsApi() {
  const response = await request.get(planetURL)
  return response.body
}
