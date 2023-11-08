import { useState, useEffect } from 'react'

import { getServer } from '../apiClient.ts'
import type { ServerDetails } from '../../models/welcome.ts'

function App() {
  const [serverDets, setServerDets] = useState<ServerDetails | null>()

  useEffect(() => {
    async function fetchServerDets() {
      const serverData = await getServer()
      setServerDets(serverData)
    }

    try {
      fetchServerDets()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <>
      <h2>Server Status </h2>
    </>
  )
}

// function App() {
//   const [welcomeStatement, setWelcomeStatement] = useState('')

//   useEffect(() => {
//     getServer()
//       .then((res) => {
//         setWelcomeStatement(res.statement)
//       })
//       .catch((err) => {
//         console.error(err.message)
//       })
//   })

//   return <h1>{welcomeStatement}</h1>
// }
export default App
