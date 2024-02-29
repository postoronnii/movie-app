export default function SearchForm({ onSearch, inputRef, initialValue }) {
  return (
    <div className="flex gap-3">
      <form onSubmit={onSearch} className="flex gap-3">
        <input
          type="text"
          placeholder="What do you want to watch?"
          className="border px-2 w-[715px] h-[59px] bg-[#323232cc] rounded-md text-xl text-white"
          ref={inputRef}
          defaultValue={initialValue}
        />
        <button
          type="submit"
          className="w-[233px] h-[57px] bg-[#f65261] rounded-md text-white text-xl"
        >
          SEARCH
        </button>
      </form>
    </div>
  )
}
