import { useState, useEffect } from 'react'

import { getMovies } from '../apiClient'
import type { Movie } from '../../models/Movies'

export default function Movie() {
  const [movie, setMovie] = useState<Movie | null>()

  useEffect(() => {
    async function fetchMovie() {
      const movieData = await getMovies()
      setMovie(movieData)
    }
    try {
      fetchMovie()
    } catch (error) {
      console.log(error)
    }
  }, [])
  return (
    <>
      <h2>Movie</h2>
      {/* <pre>{JSON.stringify(movie, null, 2)}</pre> */}
      {movie.map(() => {
        return (
          <>
            <img key={movie?.id} src={movie?.poster_path} alt={movie?.title} />
          </>
        )
      })}
    </>
  )
}
