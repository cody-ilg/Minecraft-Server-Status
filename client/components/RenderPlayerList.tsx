import { useState, useEffect, Fragment } from 'react'
import { getServer } from '../apiClient.js'
import { ServerDetails, Players } from '../../models/welcome.js'
import '../../server/main.css'

export function RenderPlayerList() {
  const [playerDets, setPlayerDets] = useState<Players | null>()

  useEffect(() => {
    async function fetchServerDets() {
      const serverData = await getServer()
      setPlayerDets(serverData)
      const userArr = playerDets?.players.list
      console.log(userArr)
    }

    try {
      fetchServerDets()
    } catch (error) {
      console.log(error)
    }
  }, [])

  // Object.keys(playerDets?.players.list[0]).map((key) => {
  //   const player = playerDets?.players.list[0][key]
  //   return (
  //     <Fragment key={key}>
  //       <p>{player.name}</p>
  //     </Fragment>
  //   )
  // })

  return (
    <>
      <div>
        <p>testing</p>
      </div>
    </>
  )
}
