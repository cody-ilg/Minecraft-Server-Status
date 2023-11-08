import { useEffect, useState } from 'react'
import { getBooks } from '../apiClient.ts'
import * as Models from '../../models/Books.ts'
import 

export function Books() {
  const [books, setBooks] = useState([] as Models.Doc[])

  useEffect(() => {
    async function fetchBooks() {
      const bookList = await getBooks()
      setBooks(bookList.docs)
      console.log(books)
    }
    fetchBooks()
  }, [])

  return (
    <>
      <h2>Books</h2>
      <ol>
        {books.map((book) => (
          <Route />
        ))}
      </ol>
    </>
  )
}
