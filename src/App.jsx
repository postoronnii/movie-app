import { useEffect, useRef, useState } from 'react'
import Counter from './components/CounterFun'
import Genre from './components/Genre'
import SearchForm from './components/SearchForm'

export default function App() {
  const movies = ['all', 'documentary', 'comedy', 'horror', 'crime']

  const [selectedGenre, setSelectedGenre] = useState(null)
  const [search, setSearch] = useState('')
  const inputRef = useRef(null)

  const handleSelectedGenre = (genre) => {
    setSelectedGenre(genre)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (inputRef.current.value === '') return
    setSearch(inputRef.current.value)
  }

  useEffect(() => {
    console.log(search)
  }, [search])

  return (
    <div>
      <div className="flex justify-center items-center ">
        <Counter value={0} />
      </div>
      <div className="flex justify-center items-center pt-10">
        <SearchForm onSearch={handleSearch} inputRef={inputRef} />
      </div>
      <div className="flex justify-center items-center pt-10">
        <Genre
          genres={movies}
          selectedGenre={selectedGenre}
          onSelect={handleSelectedGenre}
        />
      </div>
    </div>
  )
}
