import request from 'superagent'
import * as Albums from '../models/Albums.ts'

// *** EXAMPLE ***
export async function getFolder() {
  const response = await request.get(
    `https://api.discogs.com/users/ljlinessmith/collection/folders/0/releases`
  )
  return response.body
}
// ***   ***   ***
