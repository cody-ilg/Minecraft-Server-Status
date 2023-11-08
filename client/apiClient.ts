import request from 'superagent'
import { Welcome } from '../models/welcome.ts'

const serverURL = '/api/v1'

// *** EXAMPLE ***
export function getWelcome(): Promise<Welcome> {
  return request.get(`${serverURL}/welcome`).then((response) => response.body)
}
// ***   ***   ***

export async function getRandomActivity() {
  const response = await request.get('http://www.boredapi.com/api/activity/')
  return response.body
}

// export async function getCurrentWeather() {
//   const response = await request.get(
//     'http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${APIKey}'
//   )
//   return response.body
// }

export async function getCurrentWeather(cityName: string, APIKey: string) {
  const response = await request.get('/api/v1/weather/' + cityName)
  return response.body
}
