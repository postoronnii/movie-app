export default function Genre({ genres, selectedGenre, onSelect }) {
  return (
    <div>
      <div className="flex flex-wrap gap-3 items-center justify-between max-w-7xl m-auto text-xl">
        {genres.map((genre, index) => {
          return (
            <button
              key={index}
              className={selectedGenre === index ? 'font-bold' : 'font-normal'}
              onClick={() => onSelect(index)}
            >
              {genre.toUpperCase()}
            </button>
          )
        })}
      </div>
    </div>
  )
}
