export default function MenuItem({ genre, selectedGenre, onSelect }) {
  return (
    <button
      key={genre}
      className={selectedGenre === genre ? 'text-black' : 'text-gray-500'}
      onClick={() => onSelect(genre)}
    >
      {genre.toUpperCase()}
    </button>
  )
}
