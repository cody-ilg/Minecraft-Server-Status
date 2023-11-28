import request from 'superagent'

const serverApiURL = '/api/v1/ferryData/'

export async function getFerryData() {
  try {
    const httpRequestObject = await request.get(serverApiURL)
    const ferryArr = httpRequestObject.body
    

    const ferryOperatorsArr = ferryArr.map((ferry) => {
      return ferry.operator
    })
    const ferryNamesArr = ferryArr.map((ferry) => {
      return ferry.vessel ? ferry.vessel : 'no name'
    }) 
    const ferryTimeArr = ferryArr.map((ferry) => {
      return ferry.timestamp.split('T')[1].split('.')[0]
    })

    const ferryObj = {ferryOperatorsArr, ferryNamesArr, ferryTimeArr}
    console.log('this is the ferry data')
    console.log(ferryObj)

    return ferryObj

  } catch (error) {
    console.error('Error fetching ferry data on client:', error)
    throw error 
  }
}
