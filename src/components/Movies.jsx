import { useEffect, useState } from 'react'
import axios from 'axios'
import MovieTitle from './elements/MovieTile'

export default function Movies() {
  const [movies, setMovies] = useState({ data: [] })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/movies')
        setMovies(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="flex flex-col px-20 pb-14">
      <div className="flex text-white text-xl mt-5 font-extralight gap-2">
        <span className="font-bold">{movies.totalAmount}</span>
        <span>movies found</span>
      </div>
      <div className="flex flex-wrap justify-between gap-5">
        {movies.data.map((movie) => {
          let date = new Date(movie.release_date)
          let year = date.getFullYear()
          let genres = movie.genres.join(', ')

          return (
            <MovieTitle
              key={movie.id}
              movie={movie}
              year={year}
              genres={genres}
            />
          )
        })}
      </div>
    </div>
  )
}
