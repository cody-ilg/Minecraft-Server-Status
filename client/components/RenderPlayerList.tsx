import { useState, useEffect } from 'react'
import { getServer } from '../apiClient.js'
import { Players } from '../../models/serverData.js'
import '../../server/main.css'

export function RenderPlayerList() {
  const [playerDets, setPlayerDets] = useState<Players | null>()

  useEffect(() => {
    async function fetchServerDets() {
      const serverData = await getServer()
      setPlayerDets(serverData)
    }

    try {
      fetchServerDets()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <>
      <div>
        <p>
          <b className="ph">Players Online: </b>
          {playerDets?.players.online}
          <b className="ph">,</b> <b className="ph">Max: </b>
          {playerDets?.players.max}
        </p>
        <p></p>
        <p className="pAlt">
          {playerDets?.players.list.map((playerName, i) => {
            return (
              <li key={i} className="">
                <b className="ps">name: </b>
                {playerName.name} <b className="ps">id:</b>
                {playerName.uuid}
              </li>
            )
          })}
        </p>
      </div>
    </>
  )
}
