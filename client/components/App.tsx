import { useState, useEffect } from 'react'

import { getWelcome, getPokemon } from '../apiClient.ts'
import LOTRQuote from './LOTRQuote.js'
import Pokemon from './Pokemon.js'
import Starwars from './Starwars.js'

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
  // console.log(process.env.LOTR_API_TOKEN)
const serverURL = '/api/v1'

  return (
    <>
    
      <h1>{welcomeStatement}</h1>
      <Pokemon/>
      <Starwars />
      <LOTRQuote />
    </>
  )
}

export default App
