import { useState, useEffect } from 'react'

import { getWelcome } from '../apiClient.ts'
import RandomActivity from './RandomActivity.tsx'
import CurrentWeather from './CurrentWeather.tsx'

function App() {
  const [welcomeStatement, setWelcomeStatement] = useState('')

  useEffect(() => {
    getWelcome()
      .then((res) => {
        setWelcomeStatement(res.statement)
      })
      .catch((err) => {
        console.error(err.message)
      })
  })

  return (
    <>
      <h1>{welcomeStatement}</h1>
      <RandomActivity />
      <CurrentWeather />
    </>
  )
}

export default App
