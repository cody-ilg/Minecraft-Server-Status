import Image from './Image.js'
import { useState } from 'react'

function App() {
  const [query, setQuery] = useState(null)
  const gifs = Array(9).fill(<Image query={query} />)

  console.log(query, gifs)

  function handleSubmit(event) {
    event.preventDefault()
    setQuery(document.getElementById('query').value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="query">Query:</label>
        <input type="text" id="query" name="query" />
        <button>Get by query</button>
      </form>
      {gifs}
    </>
  )
}

export default App
