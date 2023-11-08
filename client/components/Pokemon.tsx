import { useState, useEffect } from 'react'
import { getSalamence } from '../apiClients/pokemon.ts'
import type { Pokemon } from '../../models/Pokemon.ts'

export function Pokemon() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const salamenceData = await getSalamence()
        setPokemon(salamenceData)
      } catch (error) {
        console.error(error)
      }
    }

    fetchPokemon()
  }, [])

  return (
    <>
      <h2>SALAMENCE</h2>
      <pre>{JSON.stringify(pokemon, null)}</pre>
    </>
  )
}
