import request from 'superagent'
import { Welcome } from '../models/welcome.ts'
import { FerryOperators } from '../models/ferrys.ts'

const serverURL = '/api/v1'

// *** EXAMPLE ***
export function getWelcome(): Promise<Welcome> {
  return request.get(`${serverURL}/welcome`).then((response) => response.body)
}
// ***   ***   ***
export function getFerryOperators(): Promise<FerryOperators> {

}
