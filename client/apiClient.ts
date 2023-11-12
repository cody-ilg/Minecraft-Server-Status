import request from 'superagent'
import { Data, Marvel, Result } from '../models/welcome.ts'
import server from '../server/server.ts'

const serverURL = '/api/v1/public/characters'

// *** EXAMPLE ***
export async function getMarvel(): Promise<Marvel []> {
 const response = await request.get(serverURL)
 return response.body
}
// ***   ***   ***
