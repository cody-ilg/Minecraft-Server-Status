//API requests
import request from 'superagent'
import { LOTRCharacters } from '../../models/LordOfTheRings.ts'
const charactersURL = '/api/v2/character'

// getAllCharactersApi function uses superagent to make a GET request 
// to your server's /api/v2/character route, which, in turn, fetches data from the LOTR API.

export async function getAllCharactersApi(): Promise<LOTRCharacters[]> {
  try {
    const response = await request.get(charactersURL)
    console.log('API Response: ', response)
    return response.body
  } catch (error) {
    console.log('Error fetching characters: ', error)
    throw error
  }
}
