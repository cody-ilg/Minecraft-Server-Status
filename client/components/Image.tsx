/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useEffect } from 'react'
import { getImage } from '../apiClient.js'

interface Props {
  query: string
}

function Image(props: Props) {
  const { query } = props

  const placeholder = {
    url: 'https://media.tenor.com/-NoKc-auITEAAAAC/loading-buffering.gif',
    alt: 'Loading GIF',
  }

  const [image, setImage] = useState(placeholder)

  async function fetchImage(event = null) {
    if (event || query) setImage(placeholder)

    const image = await getImage(query)
    const data = {
      url: image.media_formats.gif.url,
      alt: image.content_description,
    }
    console.log(data, image)
    setImage(data)
  }

  useEffect(() => {
    fetchImage()
  }, [query])

  return <img src={image.url} alt={image.alt} onClick={fetchImage} />
}

export default Image
