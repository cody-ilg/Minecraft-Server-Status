import request from 'superagent'
import { ServerDetails } from '../models/serverData.js'

const serverURL = '/api/v1'



export async function getServer(): Promise<ServerDetails> {
  const response = await request.get(
    // 'https://api.mcsrvstat.us/3/51.77.116.12:25570'
    // 'https://api.mcsrvstat.us/3/140.238.205.133:25565'
    'https://api.mcsrvstat.us/3/140.238.205.133:25565'
  )
  return response.body
}
