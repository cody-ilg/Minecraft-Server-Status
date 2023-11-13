import { useState, useEffect } from 'react'

import { getWelcome } from '../apiClient.ts'

import GetPokemon from './Pokemon.tsx'

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
      <GetPokemon />
    </>
  )
}

export default App
