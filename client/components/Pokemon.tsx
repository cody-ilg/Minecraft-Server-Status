import { useState, useEffect } from 'react'

import { getSalamence } from '../apiClients/pokemon.ts'
import type { Pokemon } from '../../models/Pokemon.ts'

export function Pokemon() {
  const [pokemon, setPokemon] = useState<Pokemon>

}