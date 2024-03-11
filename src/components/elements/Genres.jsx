export default function Genres({ genres, selectedGenre, setSelectedGenre }) {
  return (
    <div className="flex flex-grow max-w-7xl gap-5 m-auto   ">
      {genres.map((genre) => {
        return (
          <button
            key={genre}
            className={selectedGenre === genre ? 'text-[#F65261]' : ''}
            onClick={() => setSelectedGenre(genre)}
          >
            {genre.toUpperCase()}
          </button>
        )
      })}
    </div>
  )
}
