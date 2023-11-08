import { useState, useEffect, Children } from 'react'
import { getServer } from '../apiClient.ts'
import { ServerDetails, Players } from '../../models/welcome.ts'
import '../../server/main.css'
import { RenderPlayerList } from './RenderPlayerList.tsx'

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

  const bool1 = serverDets?.online

  console.log(serverDets?.players.online, 'No. of players')
  return (
    <>
      <div>
        <h2>Server Stats!</h2>
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
          {String(bool1)}
          <br></br>
          <b className="ph"> Version: </b>
          {serverDets?.version} <b className="ph">Client: </b>
          {serverDets?.software}
        </p>

        <div
        // dangerouslySetInnerHTML={{ __html: serverDets?.players.list }}
        ></div>
      </div>
      {/* <pre>{JSON.stringify(serverDets, null, 2)}</pre> */}
    </>
  )
}
