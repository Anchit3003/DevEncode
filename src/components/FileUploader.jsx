import React,{useState,useRef} from 'react'

function FileUploader() {
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef(null);

  const handleFileChange= (e) =>{
    const file = e.target.files[0];
    if (file) {{
      setFileName(file.name);
      onFileSelect?.(file)
    }
  }
}
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <button type = "button" className="btn btn-primary" onClick={triggerFileInput}>
        Upload File
      </button>
      <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" />


        {fileName && (
        <span className="text-sm text-gray-700">Selected: {fileName}</span>
      )}
      
    </div>
  )
}

export default FileUploader