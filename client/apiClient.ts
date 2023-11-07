import request from 'superagent'

const serverURL = '/api/v1'

export async function getImage() {
  return await request.get(`${serverURL}/image`).then((response) => {
    return response.body
  })
}
