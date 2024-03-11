import { useState } from 'react'
import SortControl from './elements/SortControl'
import Genres from './elements/Genres'

export default function Menu({ genres }) {
  const [selectedGenre, setSelectedGenre] = useState(null)
  return (
    <div className="flex flex-col lg:px-20 pt-4">
      <div className="flex justify-between font-extralight text-white text-xl">
        <Genres
          genres={genres}
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
        />
        <SortControl />
      </div>
      <div className="bg-[#888888] h-[1px] mt-3" />
    </div>
  )
}
