import React from "react";

const getLineNumbers = (value) => {
  const lines = value ? value.split("\n").length : 1;
  return Array.from({ length: lines }, (_, i) => i + 1);
};

const TextAreaBox = React.forwardRef(
  ({ value, onChange, placeholder, readOnly = false }, ref) => (
    <div className="flex w-full border rounded-b overflow-hidden bg-white dark:bg-gray-900 shadow-md">
      {/* Line Numbers Column */}
      <div className="bg-gray-100 dark:bg-gray-800 border-r border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 text-right py-2 px-3 select-none font-mono flex flex-col items-end min-h-[150px]">
        {getLineNumbers(value).map((num) => (
          <span
            key={num}
            className="leading-6 text-xs px-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            {num}
          </span>
        ))}
      </div>

      {/* Text Area */}
      <textarea
        ref={ref}
        className="w-full p-2 resize-none overflow-hidden min-h-[150px] h-[150px] font-mono text-sm outline-none bg-transparent text-gray-800 dark:text-gray-200"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
      />
    </div>
  )
);

export default TextAreaBox;
