import { useState, useEffect } from 'react'
import { getServer } from '../apiClient.js'
import { Players } from '../../models/serverData.js'
import '../../server/main.css'

export function RenderPlayerList() {
  const [playerDets, setPlayerDets] = useState<Players | null>()

  useEffect(() => {
    async function fetchServerDets() {
      const serverDets = await getServer()
      setPlayerDets(serverDets)
    }

    try {
      fetchServerDets()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <>
      <p>
        <b className="ph">Players Online: </b>
        {playerDets?.players.online}/{playerDets?.players.max}
      </p>

      <tbody className="pAlt">
        {playerDets?.players.list.map((playerName, i) => {
          return (
            <tr key={i} className="">
              <td>
                <b className="ps">name: </b> {playerName.name}{' '}
              </td>
              <td>
                {' '}
                <b className="ps">id:</b> {playerName.uuid}
              </td>
            </tr>
          )
        })}
      </tbody>
    </>
  )
}
