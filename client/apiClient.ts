import request from 'superagent'
// import { FerryOperators } from '../models/ferrys.ts'
const ferryOperatorURL = '/api/v1/ferryOperators/'


export async function getFerryOperators () {
    return await request
        .get(ferryOperatorURL).then(response => response.body)
}
