import { useState, useEffect } from 'react'
import { Pokemon } from './Pokemon.tsx'
import { getWelcome } from '../apiClient.ts'
import { LOTR } from './LOTR.tsx'

// function App() {
//   const [welcomeStatement, setWelcomeStatement] = useState('')

//   useEffect(() => {
//     getWelcome()
//       .then((res) => {
//         setWelcomeStatement(res.statement)
//       })
//       .catch((err) => {
//         console.error(err.message)
//       })
//   })

//   return <h1>{welcomeStatement}</h1>
// }

function App() {
  return (
    <>
      <Pokemon />
    </>
  )
}

export default App
