import { useState, useEffect } from 'react'
import { Album } from '../../models/Albums.ts'
import { getAlbums } from '../apiClient.ts'
import { getAlbums2 } from '../apiClient.ts'
import { Link } from 'react-router-dom'

export default function Albums() {
  const [albums, setAlbum] = useState([] as Album[])

  useEffect(() => {
    async function fetchAlbum() {
      const albumData = await getAlbums()
      setAlbum(albumData.releases)
      console.log(albumData.releases)
      console.log(albums)
    }
    fetchAlbum()
  }, [])

  const [albums2, setAlbum2] = useState([] as Album[])

  useEffect(() => {
    async function fetchAlbum2() {
      const albumData2 = await getAlbums2()
      setAlbum2(albumData2.releases)
      console.log(albumData2.releases)
      console.log(albums2)
    }
    fetchAlbum2()
  }, [])

  return (
    <>
      <h1>Albums List</h1>
      {albums.map((album) => (
        <li key={album.basic_information.id}>
          {album.basic_information.title}
          {/* <Link to={}>{album.basic_information.title}</Link> */}
        </li>
      ))}
      {albums2.map((album2) => (
        <li key={album2.basic_information.id}>
          {album2.basic_information.title}
          {}
        </li>
      ))}
    </>
  )
}
