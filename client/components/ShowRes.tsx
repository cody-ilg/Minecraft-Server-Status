// import { useState, useEffect } from 'react'
// import { getServer } from '../apiClient.js'
// import { Players } from '../../models/serverData.js'
// import '../../server/main.css'

// export function ShowRes() {
//   const [playerDets, setPlayerDets] = useState<Players | null>()

//   useEffect(() => {
//     async function fetchServerDets() {
//       const serverData = await getServer()
//       setPlayerDets(serverData)
//     }

//     try {
//       fetchServerDets()
//     } catch (error) {
//       console.log(error)
//     }
//   }, [])

//   function renderJSON() {
//     // return <pre>{JSON.stringify(playerDets, null, 2)}</pre>
//     const [show, setShow] = useState(true)
//     return (
//       <div>
//         <button onClick={() => setShow(!show)}>
//           CLick me {show ? 'Hide' : 'Show'}{' '}
//         </button>
//         {show ? JSON.stringify(playerDets, null, 2) : null}
//       </div>
//     )
//   }
//   return <></>
// }
