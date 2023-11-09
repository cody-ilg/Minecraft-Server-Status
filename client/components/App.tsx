import { useState, useEffect } from 'react'
import { getFerryOperators } from '../apiClient.ts'


function App() {
  const [welcomeStatement, setWelcomeStatement] = useState('')
  const [ferryOperators, setFerryOperators] = useState()
  getFerryOperators()
  console.log("hey")

  return (
  <>
  <h2>Testing this page works</h2>
  </>
  )
}

export default App
