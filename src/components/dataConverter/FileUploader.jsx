import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpOnSquareStackIcon } from '@heroicons/react/24/outline';


function FileUploader({ onFileRead, inputType }) {
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef(null);
  const [fileType, setFileType] = useState('');

  useEffect(() => {
    if (inputType === 'json') {
      setFileType('.json');
    } else if (inputType === 'yaml') {
      setFileType('.yaml,.yml');
    } else if (inputType === 'string') {
      setFileType('.txt');
    } else {
      setFileType('');
    }
  }, [inputType]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {{
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload= e =>{
        const fileContent = e.target.result
        if(onFileRead && typeof onFileRead === 'function') {
          onFileRead(fileContent);
        }
      };
      reader.readAsText(file);
    }
  }
}
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
</svg>

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <button type = "button" className="btn btn-primary active:scale-90 transition-transform duration-150" onClick={triggerFileInput}>
        <ArrowUpOnSquareStackIcon className="h-7 w-7 cursor-pointer" />
      </button>
      <input type="file" accept={fileType} ref={fileInputRef} onChange={handleFileChange} className="hidden" />


        {fileName && (
        <span className="text-sm text-gray-700">Selected: {fileName}</span>
      )}
      
    </div>
  );
}

export default FileUploader