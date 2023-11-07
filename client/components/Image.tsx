import { useState, useEffect } from 'react'
import { getImage } from '../apiClient.ts'

function Image() {
  const [image, setImage] = useState(
    'https://media.tenor.com/UGJPIFeOmGkAAAAd/sniff-cat.gif'
  )

  // useEffect(() => {
  //   getImage()
  //     .then((res) => {
  //       setImage(res.body)
  //     })
  //     .catch((err) => {
  //       console.error(err.message)
  //     })
  // })

  return <img src={image} />
}

export default Image
