import { useState, useEffect } from 'react'
import { getImage } from '../apiClient.ts'

function Image() {
  const placeholder = {
    url: '',
    alt: '',
  }

  const [image, setImage] = useState(placeholder)

  useEffect(() => {
    async function fetchImage() {
      const image = await getImage()
      const data = {
        url: image.media_formats.gif.url,
        alt: image.content_description,
      }
      console.log(image, data)
      setImage(data)
    }
    fetchImage()
  }, [])

  return <img src={image?.url} alt={image?.alt} />
}

export default Image
