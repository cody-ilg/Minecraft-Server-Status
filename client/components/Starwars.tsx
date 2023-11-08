//Star Wars Component
import { useEffect, useState } from 'react'

import {
  getStarWarsPeopleApi,
  getStarWarsPlanetsApi,
} from '../apiClient/starwars.ts'

import type { Starwars } from '../../models/Starwars.ts'

export default function Starwars() {
  const [starWarsPeople, setStarWarsPeople] = useState([])
  const [starWarsPlanets, setStarWarsPlanets] = useState([])
  useEffect(() => {
    async function fetchStarWars() {
      const starWarsPeopleData = await getStarWarsPeopleApi()
      const starWarsPlanetsData = await getStarWarsPlanetsApi()
      setStarWarsPeople(starWarsPeopleData.results)
      setStarWarsPlanets(starWarsPlanetsData.results)
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
      {starWarsPeople.map((person, index) => (
        <div key={index}>
          <h4>Name: {person.name}</h4>
          <h4>Birth year: {person.birth_year}</h4>
        </div>
      ))}
      <h1>Star Wars Planets</h1>
      {starWarsPlanets.map((planet, index) => (
        <div key={index}>
          <h4>Name: {planet.name}</h4>
          <h4>Planet terrain: {planet.terrain}</h4>
        </div>
      ))}
    </>
  )
}
