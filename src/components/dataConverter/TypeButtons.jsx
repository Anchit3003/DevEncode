import React from 'react'

function TypeButtons({ type, options, onChange }) {
    console.log("CHECKING RENDER",{options})
  return (
   <div className="flex w-full">
      {options.map((option, idx) => (
        <button
          key={option}
          className={`flex-1 px-4 py-2 border-t border-l border-b-0 ${idx === options.length - 1 ? 'border-r' : ''} ${
            idx === 0 ? 'rounded-tl' : 'rounded-tl-none'
          } ${
            idx === options.length - 1 ? 'rounded-tr' : 'rounded-tr-none'
          } rounded-bl-none rounded-br-none focus:outline-none transition-colors duration-150 border-black ${
            type === option
              ? "bg-white text-black font-semibold"
              : "bg-gray-100 text-gray-500"
          }`}
          onClick={() => onChange && onChange(option)}
        >
         {option==="string" ? "String" : option.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default TypeButtons