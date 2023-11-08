import '../../server/main.css'
import { ShowServerDets } from './ServerDetails.tsx'
import { RenderPlayerList } from './RenderPlayerList.tsx'

function App() {
  return (
    <>
      <body className="body">
        <div className="serverDets">
          <ShowServerDets />
        </div>
        <div className="playerDets">
          <RenderPlayerList />
        </div>
      </body>
      {/* <pre>{JSON.stringify(serverDets, null, 2)}</pre> */}
    </>
  )
}

export default App
