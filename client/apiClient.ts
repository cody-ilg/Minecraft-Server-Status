import request from 'superagent'

const serverURL = '/api/v1'

export async function getImage(query) {
  return await request.get(`${serverURL}/image${query ? '?query=' + query : ""}`).then((response) => {
    return response.body
  })
}
