import request from 'superagent'
import { Articles } from '../models/welcome.ts'

const serverURL = 'https://api.spaceflightnewsapi.net/v4/articles/'

export async function getRockets(): Promise<Articles> {
  const response = await request.get(serverURL)
  console.log(response.body)
  return response.body
}
