import request from 'superagent'
import { RandomEvent } from '../models/RandomEvent.ts'

const serverURL = 'http://www.boredapi.com/api/activity/'

// *** EXAMPLE ***
export async function getRandomEvent(): Promise<RandomEvent> {
  const response = await request.get(serverURL)
  return response.body
}
// ***   ***   ***
