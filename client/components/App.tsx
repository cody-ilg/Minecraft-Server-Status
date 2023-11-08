import { useState, useEffect } from 'react'

import { getWelcome, getBooks } from '../apiClient.ts'
import { Books } from './Books.tsx'
import { BooksIndividualChapters } from './BooksIndividualChapters.tsx'

function App() {
  // const [welcomeStatement, setWelcomeStatement] = useState('')

  // useEffect(() => {
  //   getWelcome()
  //     .then((res) => {
  //       setWelcomeStatement(res.statement)
  //     })
  //     .catch((err) => {
  //       console.error(err.message)
  //     })
  // })

  return (
    <>
      <Books />
      <BooksIndividualChapters />
    </>
  )
}

export default App
