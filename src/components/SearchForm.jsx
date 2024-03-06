export default function SearchForm({ onChange, onSearch, value }) {
  return (
    <div className="flex gap-3">
      <input
        type="text"
        id="search-input"
        placeholder="What do you want to watch?"
        className="border px-2 w-[715px] h-[59px] bg-[#323232cc] rounded-md text-xl text-white"
        onChange={onChange}
        defaultValue={value}
      />
      <button
        id="search-btn"
        className="w-[233px] h-[57px] bg-[#f65261] rounded-md text-white text-xl"
        onClick={() => onSearch(value)}
      >
        SEARCH
      </button>
    </div>
  )
}
