import React from "react";


const getLineNumbers = (value) => {
  const lines = value ? value.split('\n').length : 1;
  return Array.from({ length: lines }, (_, i) => i + 1);
};

const TextAreaBox = React.forwardRef(
  ({ value, onChange, placeholder, readOnly = false }, ref) => (
    <div className="flex w-full border rounded-b overflow-hidden">
      <div className="bg-gray-100 border-r border-black text-gray-500 text-right py-2 px-2 select-none font-mono flex flex-col items-end min-h-[150px]">
        {getLineNumbers(value).map((num) => (
          <span key={num} className="leading-6 text-xs">{num}</span>
        ))}
      </div>
      <textarea
        ref={ref}
        className="w-full p-2 resize-none overflow-hidden min-h-[150px] h-[150px] font-mono text-sm outline-none"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
      />
    </div>
  )
);

export default TextAreaBox;
