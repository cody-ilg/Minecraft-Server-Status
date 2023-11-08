import { useEffect, useState } from 'react'
import { getStarwars } from '../apiClient.js'
import type { Starwars } from '../../models/starwars.js'

export default function Starwars() {
  const [person, setPerson] = useState<Starwars | null>()
  
  useEffect(() =>  {
    async function fetchStarwars() {
      const starwarsData = await getStarwars()
      setPerson(starwarsData)
    }

    try {
      fetchStarwars()
    } catch(error) {
      console.log(error)
    }
  }, [])

  return (
    <>
      <h2>Starwars</h2>
      {<pre>{JSON.stringify(person, null, 2)}</pre>}
      {person?.name}<br/><br/>
      {person?.vehicles[0]}
    </>
  )
}