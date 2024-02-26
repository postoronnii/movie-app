export default function Genre({ genres, selectedGenre, onSelect }) {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between max-w-7xl gap-5 m-auto text-xl text-gray-500 font-bold">
        {genres.map((genre, index) => {
          return (
            <button
              key={index}
              className={`${
                selectedGenre === index ? 'text-black' : 'text-gray-500'
              } `}
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
