import { join } from 'node:path'
import express from 'express'
import * as Path from 'node:path'
import * as URL from 'node:url'
import 'dotenv/config'
import request from 'superagent'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, './public')))

server.get('/api/v2/character', async (req, res, next) => {
  try {
    const token = process.env.LOTR_API_TOKEN
    console.log(token)
    const apiResponse = await request
      .get(`https://the-one-api.dev/v2/character`)
      .set('Authorization', `Bearer ${token}`)
    res.setHeader('Cache-Control', 'no-store')
    res.json(apiResponse.body.docs)
  } catch (error) {
    next(error)
  }
})

export default server
