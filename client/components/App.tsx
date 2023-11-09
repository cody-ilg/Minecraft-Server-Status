import { useState, useEffect } from 'react'
import { getFerryOperators, getFerryNames, getFerryTime } from '../apiClient.ts'
import { Operator } from '../../models/ferrys.ts'


function App() {
  const [operators, setOperators] = useState([])
  const [names, setNames] = useState([])
  const [time, setTime] = useState([])

  const [refreshes, setRefreshes] = useState(0)
  // when the button gets pushed then the thing updates
  //onclick
  // getoperators()
  
  useEffect(()=>{
    async function fetchFerryData(){
      try{
        const retrievedOperatorList = await getFerryOperators()
        const retrievedNameList = await getFerryNames()
        const retrievedTimes = await getFerryTime()

        setOperators(retrievedOperatorList)
        setNames(retrievedNameList)
        setTime(retrievedTimes)
      }catch(error){
      console.error("error running apiClient Functions")
      } 
    }
    fetchFerryData()
  },[refreshes])

  function handleClick(){
    setRefreshes((prevRefreshes)=> prevRefreshes+1)
  }


  return (
  <>
  <h2>List of Current Ferry Operators</h2>
  <ul>

    {
    operators.map((operator,i)=>{
      return (
        <>
        <li key={i}>{`${time[i]} - ${operator} - ${names[i]}`}</li>
        </>
      )
    })
    }

  </ul>

  <button onClick={handleClick}>{`Refresh - ${refreshes}`}</button>
  </>
  )

}

export default App
