import { useEffect, useState } from 'react'

import { getPokemonApi } from '../apiClient.ts'

import { Pokemon, Species } from '../../models/Pokemon.ts'

export default function GetPokemon() {
  const [pokemon, setPokemon] = useState<Pokemon | null>()

  useEffect(() => {
    async function fetchPokemon() {
      const pokemonData = await getPokemonApi()
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
      <div key={pokemon?.name}>
        <strong>Name:</strong> {pokemon?.name}
      </div>

      <div key={pokemon?.weight}>
        <strong>Weight:</strong> {pokemon?.weight}
      </div>
      <img src={pokemon?.sprites.front_shiny} alt={pokemon?.name} />
    </>
  )
}
