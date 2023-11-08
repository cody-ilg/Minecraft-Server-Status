import { useState, useEffect } from 'react'
import { getServer } from '../apiClient.ts'
import { ServerDetails, Players } from '../../models/welcome.ts'
import '../../server/main.css'

export function ShowServerDets() {
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
      <div className="body">
        <h2>Server Stats!</h2>

        <p>
          <b> Ip address: </b>
          {serverDets?.ip}:{serverDets?.port} <b>Online: </b>
        </p>
        <br></br>
        <p>
          <b>Message of the day: </b>
          <p dangerouslySetInnerHTML={{ __html: serverDets?.motd.html }}></p>
          <img src={serverDets?.icon} alt="Server Icon" />
        </p>

        <p>
          <b> Version: </b>
          {serverDets?.version} <b>Client: </b>
          {serverDets?.software}
        </p>
        <p>
          <b>Players Online:</b> {serverDets?.players.online} <b>Max: </b>
          {serverDets?.players.max}
        </p>
      </div>
      {/* {arr.map(() => (
        <div key={index}>
          <div>Username: {serverDets?.players.list.name}</div>
        </div>
      ))} */}
    </>
  )
}
