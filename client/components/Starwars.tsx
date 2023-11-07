//Component
import { useEffect, useState } from 'react'

import {
  getStarWarsPersonApi,
  getStarWarsPlanetApi,
} from '../apiClient/starwars.ts'

import type { Starwars } from '../../models/Starwars.ts'

export default function Starwars() {
  const [starWarsPerson, setStarWarsPerson] = useState<Starwars | null>()
  const [starWarsPlanet, setStarWarsPlanet] = useState<Starwars | null>()
  useEffect(() => {
    async function fetchStarWars() {
      const starWarsPersonData = await getStarWarsPersonApi()
      const starWarsPlanetData = await getStarWarsPlanetApi()
      setStarWarsPerson(starWarsPersonData)
      setStarWarsPlanet(starWarsPlanetData)
    }
    try {
      fetchStarWars()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <>
      <h1>Star Wars Characters</h1>
      <h4>Name: {starWarsPerson?.name}</h4>
      <h4>Home world: {starWarsPlanet?.name}</h4>
    </>
  )
}
