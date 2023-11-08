export interface Books {
  docs: Doc[]
  total: number
  limit: number
  offset: number
  page: number
  pages: number
}

export interface Doc {
  _id: string
  name: string
}

export interface BookIndividualChapters {
  docs: Doc[]
  total: number
  limit: number
  offset: number
  page: number
  pages: number
}
