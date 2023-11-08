import App from './components/App.js'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

export const clientRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouterProvider router={clientRouter} />} />
  )
)
