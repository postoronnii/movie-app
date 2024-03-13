import { useState } from 'react'

export default function Genres({ genres }) {
  const [selectedGenre, setSelectedGenre] = useState(null)
  return (
    <div className="flex flex-grow max-w-7xl gap-5 m-auto">
      {genres.map((genre) => {
        return (
          <button
            key={genre}
            className={`${
              selectedGenre === genre ? 'text-[#F65261]' : ''
            } uppercase`}
            onClick={() => setSelectedGenre(genre)}
          >
            {genre}
          </button>
        )
      })}
    </div>
  )
}
