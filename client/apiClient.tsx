import request from 'superagent'
import { Disney } from '../models/welcome.ts'

const serverURL = '/api/v1'

// *** EXAMPLE ***
export function getWelcome(): Promise<Disney> {
  return request.get(`${serverURL}/welcome`).then((response) => response.body)
}
// ***   ***   ***
export async function getDisney(){
  const getDisney = await request.get(`https://api.disneyapi.dev/character`)
  return getDisney.body
} 