import request from 'superagent'
// import t operatorsArr } from '../models/ferrys.ts'
const serverApiURL = '/api/v1/ferryData/'


export async function getFerryOperators () {
  // this code grabs it from the backend and wraps it in a HTTP request format
  const httpRequestObject = await request
        .get(serverApiURL)

  //unwraps the http request, we now have an array of our data
  const ferryArr = httpRequestObject.body
  
  //accessing the actual info we want (operators)
  let operatorsArr = ferryArr.map((ferry)=>{
    return ferry.operator
  })

        return operatorsArr
}

export async function getFerryNames () {
  const httpRequestObject = await request
        .get(serverApiURL)
  const ferryArr = httpRequestObject.body
  let ferryNames = ferryArr.map((ferry)=>{
    let name = ""
    if(ferry.vessel===""){
      name = "UNNAMED BOAT"
    }else{
      name = ferry.vessel
    }
    return name
  })

        return ferryNames
}