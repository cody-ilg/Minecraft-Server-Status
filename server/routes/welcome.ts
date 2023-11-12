import express from 'express'

import request from 'superagent'

//I installed md5 to conver public and private key to hashInput exclusively for marvel API
import md5 from 'md5'
import 'dotenv/config.js'
const router = express.Router()

const public_key = process.env.PUBLIC_KEY;
const private_key = process.env.PRIVATE_KEY;

const hashInput = `3${private_key}${public_key}`;

const hashValue = md5(hashInput);


const url = `http://gateway.marvel.com/v1/public/characters?ts=3&apikey=${public_key}&hash=${hashValue}`;


// GET /api/v1/public/characters
router.get('/', async(req, res) => {
 
  const response = await request.get(url)
  res.json(response.body)
})

export default router
