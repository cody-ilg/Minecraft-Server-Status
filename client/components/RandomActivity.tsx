import { useState, useEffect } from 'react'
import { getRandomActivity } from '../apiClient.ts'
import type { RandomActivity } from '../../models/randomActivity.ts'

export default function RandomActivity() {
  const [rActivity, setRActivity] = useState<RandomActivity | null>()

  useEffect(() => {
    async function fetchRandomActivity() {
      const rActivityData = await getRandomActivity()
      setRActivity(rActivityData)
    }
    fetchRandomActivity()
  }, [])

  return (
    <>
      <section>
        <h1 style={{ color: 'blue' }}>Random Activity API Section (no Auth)</h1>
        <h3>Try this random activity: `{rActivity?.activity}`</h3>
        <h3>Activity type : `{rActivity?.type}`</h3>
        <h3>
          Link: <a href={rActivity?.link}>Try it here.</a>
        </h3>
        <h3>Price: `{rActivity?.price}`</h3>
      </section>
    </>
  )
}
