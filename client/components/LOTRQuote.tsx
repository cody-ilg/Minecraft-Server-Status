import { useEffect, useState } from 'react'

import { getLOTRQuote } from '../apiClient'
// import type { Lotr } from 

export default function LOTRQuote() {
  const [quotes, setQuotes] = useState()

  useEffect(() => {
    async function fetchLOTRQuote() {
      const lotrData = await getLOTRQuote()
      setQuotes(lotrData)
    }

    try {
      fetchLOTRQuote()
    } catch (error) {
      console.log(error)
    }
  },[])

  return (
    <>
      <h2> LOTR Quotes </h2>
      {<pre>{JSON.stringify(quotes, null, 2)}</pre>}
    </>
  )
}

