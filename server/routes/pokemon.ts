import express from 'express'

const pokemonRoute = express.Router()

// Import your function for fetching Pokemon data (e.g., getSalamence)
import { getSalamence } from '../apiClients/pokemon.ts'

// Define a route handler to get Pokemon data
pokemonRoute.get('/salamence', async (req, res) => {
  try {
    const salamenceData = await getSalamence()
    res.json(salamenceData)
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch Salamence data' })
  }
})

export default pokemonRoute
