import request from 'superagent'
import { ServerDetails, Players, Welcome } from '../models/welcome.ts'

const serverURL = '/api/v1'

// *** EXAMPLE ***
// export function getWelcome(): Promise<Welcome> {
//   return request.get(`${serverURL}/welcome`).then((response) => response.body)
// }

export async function getServer(): Promise<ServerDetails> {
  const response = await request.get(
    'https://api.mcsrvstat.us/3/140.238.205.133:25565'
  )
  return response.body
}
