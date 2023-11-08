import express from 'express'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from '../../client/components/App.tsx'
import { Books } from '../../client/components/Books.tsx'
import { BooksIndividualChapters } from '../../client/components/BooksIndividualChapters.tsx'

const router = express.Router()

// GET /api/v1/welcome/

export default router
