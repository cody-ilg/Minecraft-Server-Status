import { useState, useEffect } from 'react'
import { getFerryOperators, getFerryNames } from '../apiClient.ts'
import { Operator } from '../../models/ferrys.ts'


function App() {
  const [operators, setOperators] = useState()
  const [names, setNames] = useState()
  // getoperators()
  
  useEffect(()=>{
    async function fetchFerryData(){
      const retrievedOperatorList = await getFerryOperators()
      const retrievedNameList = await getFerryNames()
      setOperators(retrievedOperatorList)
      setNames(retrievedNameList)
    }
    fetchFerryData()
  })
 

  return (
  <>
  <h2>List of Current Ferry Operators</h2>
  <ul>
{/* <li>{operators[0]}</li> */}
{/* <li>{names[0]}</li> */}
    {
    operators.map((operator,i)=>{
      return (
        <>
        <li>{`${names[i]} - ${operator}`}</li>
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
