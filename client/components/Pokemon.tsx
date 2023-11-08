import { useState, useEffect } from 'react'

import { getPokemon } from '../apiClient'
import type { Pokemon } from '../../models/Pokemon'

export default function Pokemon() {
  const [pokemon, setPokemon] = useState<Pokemon | null>()

  useEffect(() => {
    async function fetchPokemon() {
      const pokemonData = await getPokemon()
      setPokemon(pokemonData)
    }
    try {
      fetchPokemon()
    } catch (error) {
      console.log(error)
    }
  }, [])
  return (
    <>
      <h2>Pokemon</h2>
      {/* <pre>{JSON.stringify(pokemon, null, 2)}</pre> */}
      <img src={pokemon?.sprites.front_shiny} alt={pokemon?.name} />
    </>
  )
}
