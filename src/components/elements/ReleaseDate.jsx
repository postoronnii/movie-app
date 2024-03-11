import React, { useState } from 'react'
import triangle from '../../images/triangle.svg'

const arr = ['Release Date', 'Title']

export default function ReleaseDate() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col">
      <button
        className="flex gap-2 items-center relative"
        onClick={() => setOpen((prop) => !prop)}
      >
        RELEASE DATE
        <img src={triangle} alt="triangle" />
      </button>
      {open && (
        <ul className="bg-[#424242] absolute items-start w-40 gap-3">
          {arr.map((i) => {
            return (
              <li
                className="px-4 py-2 text-white hover:bg-[#F65261]"
                key={i}
                onClick={() => setOpen(false)}
              >
                {i}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
