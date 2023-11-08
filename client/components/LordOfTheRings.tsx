// LOTR components
import { useState, useEffect } from 'react'
import type { LOTRCharacters } from '../../models/LordOfTheRings.ts'
import { getAllCharactersApi } from '../apiClient/lotr.ts'

export default function LordOfTheRings() {
  console.log('LOTR component is being rendered')
  const [characters, setCharacters] = useState<LOTRCharacters[]>([])

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const charactersData = await getAllCharactersApi()
        console.log(charactersData)
        setCharacters(charactersData)
      } catch (error) {
        console.log('Error fetching characters: ', error)
      }
    }
    fetchCharacters()
  }, [])

  return (
    <>
      <h2>LOTR Characters</h2>
      {characters.map((character) => (
        <div key={character._id}>
          <h4>Name: {character.name}</h4>
        </div>
      ))}
    </>
  )
}
