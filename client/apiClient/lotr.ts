//API requests
import request from 'superagent'
import { LOTRCharacters } from '../../models/LordOfTheRings.ts'
const charactersURL = '/api/v2/character'

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
