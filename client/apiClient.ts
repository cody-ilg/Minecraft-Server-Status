import request from 'superagent'
import { Album } from '../models/Albums.ts'

export async function getAlbums(): Promise<Album[]> {
  const response = await request.get(
    `https://api.discogs.com/users/ljlinessmith/collection/folders/0/releases`
  )
  return response.body
}
