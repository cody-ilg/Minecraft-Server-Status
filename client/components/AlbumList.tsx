import { useState, useEffect } from 'react'
import { Album } from '../../models/Albums.ts'
import { getAlbums } from '../apiClient.ts'

export default function Albums() {
  const [albums, setAlbum] = useState([] as Album[])

  useEffect(() => {
    async function fetchAlbum() {
      const albumData = await getAlbums()
      setAlbum(albumData)
    }
    fetchAlbum()
  }, [])

  return (
    <>
      <h1>Albums List</h1>
      {albums.map((album) => (
        <li key={album.id}>{album.title}</li>
      ))}
    </>
  )
}
