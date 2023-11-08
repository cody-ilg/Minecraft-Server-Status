import { join } from 'node:path'
import express from 'express'
import * as Path from 'node:path'
import * as URL from 'node:url'
import request from 'superagent'
import * as dotenv from 'dotenv'
dotenv.config()

import welcome from './routes/welcome.ts'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, './public')))

// server.use('/api/v1/welcome', welcome)

server.get('/api/v1/books', async (req, res) => {
  const key = process.env.LOTR_API_KEY

  const response = await request
    .get('https://the-one-api.dev/v2/book')
    .set('Authorization', `Bearer ${key}`)

  // console.log(response.body)
  res.json(response.body)
})

server.get('/api/v1/books/:id/chapter', async (req, res) => {
  const key = process.env.LOTR_API_KEY
  const bookId = req.params.id
  const response = await request
    .get(`https://the-one-api.dev/v2/book/${bookId}/chapter`)
    .set('Authorization', `Bearer ${key}`)
  console.log(response.body)
  res.json(response.body)
})

export default server
