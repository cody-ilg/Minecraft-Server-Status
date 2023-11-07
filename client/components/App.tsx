//App
import { useState, useEffect } from 'react'
import Starwars from './Starwars.tsx'

function App() {
  // const [welcomeStatement, setWelcomeStatement] = useState('')

  // useEffect(() => {
  //   getWelcome()
  //     .then((res) => {
  //       setWelcomeStatement(res.statement)
  //     })
  //     .catch((err) => {
  //       console.error(err.message)
  //     })
  // })

  return (
    <>
      <Starwars />
    </>
  )
}

export default App
