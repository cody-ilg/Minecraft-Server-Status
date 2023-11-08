import request from 'superagent'

// *** EXAMPLE ***
export async function getAlbums() {
  const response = await request.get(
    `https://api.discogs.com/users/ljlinessmith/collection/folders/0/releases`
  )
  return response.body
}
// ***   ***   ***
