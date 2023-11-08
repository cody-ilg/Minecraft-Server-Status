import { useState, useEffect } from 'react'
import { getRandomEvent } from '../apiClient.ts'
import type { RandomEvent } from '../../models/RandomEvent.ts'

export default function Events() {
  const [randomEvent, setRandomEvent] = useState<RandomEvent | null>()

  useEffect(() => {
    fetchRandomEvent()
  }, [])

  const fetchRandomEvent = async () => {
    try {
      const eventData = await getRandomEvent()
      setRandomEvent(eventData)
    } catch (error) {
      console.log(error)
    }
  }

  const handleClick = () => {
    fetchRandomEvent()
  }

  return (
    <>
      <div className="main-container">
        <h1 className="event-header">Random Events</h1>
        <pre className="data-text">{JSON.stringify(randomEvent, null, 2)}</pre>
        <button onClick={handleClick} className="refresh" type="button">
          Find a new event
        </button>
      </div>
    </>
  )
}
