import { useState, useEffect } from 'react'
import { getServer } from '../apiClient.ts'
import type { ServerDetails, Players } from '../../models/welcome.ts'


export default function Motd() {
  const [playerList, setPlayerList] = useState<Players | null>()
  useEffect(() => {
    async function fetchPlayerList() {
      const playerData = await getServer()
      setPlayerList(playerData)
    }

    try {
      fetchPlayerList()
    } catch (error) {
      console.log(error)
    }

  }, [])
  const players = { serverDets?.players.list }
  const listPlayers = players.map((string) => <li>{string}</li>)
  return(
<ul>{listPlayers}</ul>
  )

}