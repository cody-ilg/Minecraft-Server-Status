// import { useState, useEffect } from 'react'

// import { getRandomEvent } from '../apiClient.ts'

import Randomevent from './Randomevent.tsx'

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
      <h1 className="header">Choose A Random Event For Your Day</h1>
      <Randomevent />
    </>
  )
}

export default App
