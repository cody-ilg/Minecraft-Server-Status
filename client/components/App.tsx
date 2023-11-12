import { useState, useEffect } from 'react'

import { getMarvel } from '../apiClient.ts'
import { Data, Marvel, Result } from '../../models/welcome.ts'

function App() {
  const [marvel, setMarvel] = useState([] as Marvel[])

  useEffect(() => {
    async function fetchMarvelAPI(){
      const response = await getMarvel()
      setMarvel(response.data.results)
      
     
    }
    fetchMarvelAPI()
  },[])
  console.log("hoy",marvel)
  return (<><ul>{marvel.map(data=><li key = {data.id}>{data.name}</li>)}</ul></>)
}

export default App
