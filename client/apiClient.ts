import request from 'superagent'
// import { FerryOperators } from '../models/ferrys.ts'
const ferryDataURL = '/api/v1/ferryData/'


export async function getFerryOperators () {
  // this code grabs it from the backend and wraps it in a HTTP request format
  const ferryDataRequest = await request
        .get(ferryDataURL)
  //unwraps it from the http request body. We now have an array of objects. 
  const ferryData = ferryDataRequest.body
  let ferryOperators = ferryData.map((ferry)=>{
    return ferry.operator
  })
  console.log(ferryOperators)
        return ferryOperators
}
