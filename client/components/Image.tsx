import { useState, useEffect } from 'react'
import { getImage } from '../apiClient.ts'

function Image() {
  const placeholder = {
    url: 'https://media.tenor.com/-NoKc-auITEAAAAC/loading-buffering.gif',
    alt: 'Loading GIF',
  }

  const [image, setImage] = useState(placeholder)

  async function fetchImage(event) {
    if (event) setImage(placeholder)

    const image = await getImage()
    const data = {
      url: image.media_formats.gif.url,
      alt: image.content_description,
    }
    console.log(data, image)
    setImage(data)
  }

  useEffect(() => {
    fetchImage()
  }, [])

  return <img src={image.url} alt={image.alt} onClick={fetchImage} />
}

export default Image
