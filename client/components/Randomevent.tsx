import { useState, useEffect } from 'react'

import { getRandomEvent } from '../apiClient.ts'

import type { RandomEvent } from '../../models/RandomEvent.ts'

export default function Events() {
  const [randomEvent, setRandomEvent] = useState<RandomEvent | null>()

  useEffect(() => {
    async function fetchRandomEvent() {
      const eventData = await getRandomEvent()
      setRandomEvent(eventData)
    }
    try {
      fetchRandomEvent()
    } catch (error) {
      console.log(error)
    }
  }, [])
  return (
    <>
      <div className="main-container">
        <h1 className="event-header">Random Events</h1>
        <pre className="data-text">{JSON.stringify(randomEvent, null, 2)}</pre>
      </div>
    </>
  )
}
