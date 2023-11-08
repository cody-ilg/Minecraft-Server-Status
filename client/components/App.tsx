import { useState, useEffect } from 'react'
import { getServer } from '../apiClient.ts'
import { ServerDetails, Players } from '../../models/welcome.ts'
import '../../server/main.css'
import { ShowServerDets } from './ServerDetails.tsx'

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
      <pre>{JSON.stringify(serverDets, null, 2)}</pre>
      <body className="body">
        <ShowServerDets />
      </body>
    </>
  )
}

export default App
