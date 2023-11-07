//Components
import { useEffect, useState } from 'react'

import { getStarWarsApi } from '../apiClient/starwars.ts'
import type { Starwars } from '../../models/Starwars.ts'

export default function Starwars() {
  const [starWars, setStarWars] = useState<Starwars | null>()

  useEffect(() => {
    async function fetchStarWars() {
      const starWarsData = await getStarWarsApi()
      setStarWars(starWarsData)
    }
    try {
      fetchStarWars()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <>
      <h2>StarWars</h2>
      <pre>{JSON.stringify(starWars, null, 2)}</pre>
    </>
  )
}
