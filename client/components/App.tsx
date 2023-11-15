import '../../server/main.css'
import { ShowServerDets } from './ServerDetails.tsx'
import { RenderPlayerList } from './RenderPlayerList.tsx'
// import { ShowRes } from './ShowRes.tsx'

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
    </>
  )
}

export default App
