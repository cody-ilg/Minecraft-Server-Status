import request from 'superagent'
import { ServerDetails } from '../models/serverData.js'

const serverURL = '/api/v1'

export async function getServer(): Promise<ServerDetails> {
  const response = await request.get('https://api.mcsrvstat.us/3/ostara.co.nz')
  return response.body
}
