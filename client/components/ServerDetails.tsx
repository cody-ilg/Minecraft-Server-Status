import { useState, useEffect } from 'react'
import { getServer } from '../apiClient.js'
import { ServerDetails } from '../../models/serverData.js'
import '../../server/main.css'

export function ShowServerDets() {
  const [serverDets, setServerDets] = useState<ServerDetails | null>()

  useEffect(() => {
    async function fetchServerDets() {
      const serverData = await getServer()
      setServerDets(serverData)

      // console.log(serverData.players.list[0].name, 'hellooo')
      // const user = serverData.players.list[0].name
    }

    try {
      fetchServerDets()
    } catch (error) {
      console.log(error)
    }
  }, [])

  const onlineStatus = serverDets?.online

  console.log(serverDets?.players.online, 'No. of players')
  return (
    <>
      <div>
        <h2>Minecraft Server Status</h2>
        <p></p>
        <br></br>
        <div className="motdBox">
          <b className="mh">Message of the day: </b>
          <br></br>

          <div
            className="motdText"
            dangerouslySetInnerHTML={{ __html: serverDets?.motd.html }}
          ></div>
          <div>
            <img className="iconBox" src={serverDets?.icon} alt="Server Icon" />
          </div>
        </div>
        <p>
          <b className="ph"> Ip address: </b>
          {serverDets?.ip}:{serverDets?.port} <b className="ph">Online: </b>
          {String(onlineStatus)}
          <br></br>
          <b className="ph"> Version: </b>
          {serverDets?.version} <b className="ph">Client: </b>
          {serverDets?.software}
        </p>

        <div></div>
      </div>
      {/* <pre>{JSON.stringify(serverDets, null, 2)}</pre> */}
    </>
  )
}
