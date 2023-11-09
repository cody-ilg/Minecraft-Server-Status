import { useState, useEffect } from 'react'
import { getFerryOperators, getFerryNames } from '../apiClient.ts'
import { Operator } from '../../models/ferrys.ts'


function App() {
  const [ferryOperators, setFerryOperators] = useState()
  const [ferryNames, setFerryNames] = useState()
  // getFerryOperators()
  
  useEffect(()=>{
    async function fetchFerryData(){
      const ferryOperatorList = await getFerryOperators()
      const ferryNameList = await getFerryNames()
      setFerryOperators(ferryOperatorList)
      setFerryNames(ferryNameList)
    }
    fetchFerryData()
  })
 

  return (
  <>
  <h2>List of Current Ferry Operators</h2>
  <ul>

    {
    ferryOperators.map((operator,i)=>{
      return (
        <>
        <li>{`${ferryNames[i]} - ${operator}`}</li>
        </>
      )
    })
    }

  </ul>

  <button>Refresh</button>
  </>
  )
}

export default App
