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
    }

    try {
      fetchServerDets()
    } catch (error) {
      console.log(error)
    }
  }, [])

  // Object.keys(playerDets?.players.list).map((key) => {
  //   const player = playerDets?.players.list[key]
  //   return (
  //     <Fragment key={key}>
  //       <p>{player.name}</p>
  //     </Fragment>
  //   )
  // })

  return (
    <>
      <div>
        <p>
          <b className="ph">Players Online:</b>
          {playerDets?.players.online}
          <b className="ph">,</b> <b className="ph">Max: </b>
          {playerDets?.players.max}
        </p>
        <p></p>
        <p className='pAlt'>
          {playerDets?.players.list.map((playerName, i) => {
            return (
              <li key={i} className="">
                <b className="ps">NAME: </b>
                {playerName.name} <b className="ps">UUID:</b>
                {playerName.uuid}
              </li>
            )
          })}
        </p>
      </div>
    </>
  )
}
