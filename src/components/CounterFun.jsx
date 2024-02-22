import { useState } from 'react'

export default function CounterFun({ value }) {
  const [count, setCount] = useState(value)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div className="flex">
      <div className="flex flex-col text-3xl items-center">
        <p className="text-7xl font-bold pb-10">{count}</p>
        <div className="flex flex-row gap-3">
          <button
            onClick={increment}
            className="w-14 bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
          >
            +
          </button>
          <button
            onClick={decrement}
            className="w-14 bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
          >
            -
          </button>
        </div>
      </div>
    </div>
  )
}
