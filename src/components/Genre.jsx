import MenuItem from './elements/MenuItem'

export default function Genre({ genres, selectedGenre, onSelect }) {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between max-w-7xl gap-5 m-auto text-xl text-gray-500 font-bold">
        {genres.map((genre) => {
          return (
            <MenuItem
              key={genre}
              genre={genre}
              selectedGenre={selectedGenre}
              onSelect={onSelect}
            />
          )
        })}
      </div>
    </div>
  )
}
