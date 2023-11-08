import request from 'superagent'
import { Welcome } from '../models/welcome.ts'
import * as Models from '../models/Books.ts'

const serverURL = '/api/v1'

// *** EXAMPLE ***
export function getWelcome(): Promise<Welcome> {
  return request.get(`${serverURL}/welcome`).then((response) => response.body)
}
// ***   ***   ***

export async function getBooks(): Promise<Models.Books> {
  const response = await request.get('/api/v1/books')
  return response.body
}

export async function getBookInfo(
  bookId
): Promise<Models.BookIndividualChapters> {
  const res = await request.get(`/api/v1/books/${bookId}/chapter`)
  return res.body
}
