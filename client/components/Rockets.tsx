import { useState, useEffect } from 'react'
import { getRockets } from '../apiClient.ts'
import { Articles, Article } from '../../models/welcome.ts'

export default function Rockets() {
  const [rocketArticle, setRocketArticles] = useState<Articles | null>()

  useEffect(() => {
    async function fetchArticles() {
      try {
        const rocketArticlesData = await getRockets()
        setRocketArticles(rocketArticlesData)
      } catch (error) {
        console.error('Error fetching articles: ', error)
      }
    }
    fetchArticles()
  }, [])

  console.log(rocketArticle)

  return (
    <>
      <h1>Rocket Articles</h1>
      {rocketArticle?.results.map((obj, index) => {
        return (
          <div key={obj.id} className="card">
            <div className="card__img">
              <img src={obj.image_url} alt="" className="card-img" />
            </div>
            <div className="card__intro">
              <h2 className="card-title">{obj.title}</h2>
              <p className="card-summary">{obj.summary}</p>
            </div>
          </div>
        )
      })}
    </>
  )
}
