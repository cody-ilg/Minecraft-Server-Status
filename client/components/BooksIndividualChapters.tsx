import { useEffect, useState } from 'react'
import { getBookInfo, getBooks } from '../apiClient.ts'
import * as Models from '../../models/Books.ts'
import bo

export function BooksIndividualChapters() {
  const [chapters, setChapters] = useState([] as Models.Doc[])



  useEffect(() => {
    async function fetchChapters(bookId) {
      // pass books id into this function
      const bookList = await getBookInfo(bookId)
      setChapters(bookList.docs)
      console.log(chapters)
    }
    // actual book id
    fetchChapters()
  }, [])

  return (
    <>
      <h2>Books</h2>
      <ol>
        {chapters.map((chapter) => (
          <li key={chapter._id}>{chapter.name}</li>
        ))}
      </ol>
    </>
  )
}
