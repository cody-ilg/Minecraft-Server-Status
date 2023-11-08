import { useState, useEffect } from 'react'
import { Welcome } from '../../models/welcome.js'
import { getWelcome } from '../apiClient.ts'

function App() {
  const [data, setWelcomeStatement] = useState({
    time: new Date(),
    temp: 0,
  } as Welcome)

  console.log(data.time)

  useEffect(() => {
    getWelcome()
      .then((res) => {
        setWelcomeStatement(res)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  return (
    <>
      <h1>Wellington date and weather</h1>
      <h3>{new Date(data.time).toLocaleString()}</h3>
      <h3>{data.temp}</h3>
    </>
  )
}

export default App
