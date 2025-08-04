import React from "react";

const TextAreaBox =React.forwardRef(({value, onChange, placeholder, readOnly = false , },ref) => (
  
    <textarea
      ref={ref}
      className="w-full border p-2 resize-none overflow-hidden min-h-[150px] h-[150px] rounded-b " 
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
      
    />




) )
export default TextAreaBox;
