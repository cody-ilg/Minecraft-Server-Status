import { useState, useEffect } from 'react'
import { getRandomActivity } from '../apiClient.ts'
import type { RandomActivity } from '../../models/randomActivity.ts'

export default function RandomActivity() {
  const [rActivity, setRActivity] = useState<RandomActivity | null>()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const rActivityData = await getRandomActivity()
    setRActivity(rActivityData)
  }

  // useEffect(() => {
  //   async function fetchRandomActivity() {
  //     const rActivityData = await getRandomActivity()
  //     setRActivity(rActivityData)
  //   }
  //   fetchRandomActivity()
  // }, [setRActivity])(())

  return (
    <>
      <h1 style={{ color: 'blue' }}>Random Activity API Section (no Auth)</h1>
      <form onSubmit={handleSubmit}>
        <h2>Are you bored?</h2>
        <h2>Say no more!</h2>
        <button>Do Something</button>
      </form>

      {rActivity && (
        <div>
          <h2>Try this random activity: `{rActivity?.activity}`</h2>
          <h3>Activity type : `{rActivity?.type}`</h3>
          <h3>
            Link: <a href={rActivity?.link}>Try it here.</a>
          </h3>
          <h3>Price: `{rActivity?.price}`</h3>
        </div>
      )}
    </>
  )
}
