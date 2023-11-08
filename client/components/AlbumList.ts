import { useState, useEffect } from 'react'
import { Album } from '../../models/Albums.ts'
import { getAlbums } from '../apiClient.ts'

export default function albumList() {
  const [albums, setAlbum] = useState([] as Album[])

  useEffect(() => {
    async function fetchFolder() {
      const albumData = await getAlbums()
      setAlbum(albumData)
    }
    fetchFolder()
  }, [])

  return (
    <>
      {albums.map((albumList) => (
        <li key={album.id}>{albumList.title}</li>
      ))}
    </>
  )
}
