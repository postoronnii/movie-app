import { useState } from 'react'
import Genre from './components/Genre'
import SearchForm from './components/SearchForm'
import Counter from './components/Counter'

const movies = ['all', 'documentary', 'comedy', 'horror', 'crime']

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState(null)
  const [value, setValue] = useState('')

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const onSearch = (value) => {
    console.log(value)
  }

  return (
    <div>
      <div className="flex justify-center items-center ">
        <Counter value={0} />
      </div>
      <div className="flex justify-center items-center pt-10">
        <SearchForm onChange={onChange} onSearch={onSearch} value={value} />
      </div>
      <div className="flex justify-center items-center pt-10">
        <Genre
          genres={movies}
          selectedGenre={selectedGenre}
          onSelect={setSelectedGenre}
        />
      </div>
    </div>
  )
}
