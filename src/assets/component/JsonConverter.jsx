import React, {useEffect, useState, useRef} from 'react'

function JsonConverter() {
  const [jsonInput, setJsonInput] = useState('')

  const [stringOutput, setStringOutput] = useState('')
  const [parsedOutput, setParsedOutput] = useState('')
  const outputRef = useRef( null);
  const handleConverToString = () => {
    try{
      const obj = JSON.parse(jsonInput);
      const str = JSON.stringify(obj,null,4);
      setStringOutput(JSON.stringify(str));
      setParsedOutput('');
    }catch(e) {
        setStringOutput('Invalid JSON input');
    }
  }

  const handleConvertToJson = () => {
    try{
      const obj =JSON.parse(stringOutput);
      const prettyJson = JSON.stringify(obj,null,2);
      setParsedOutput(prettyJson);
    }catch(e) {
      setParsedOutput('Invalid String input');
    } 
  }
  const inputRef = useRef(null);

useEffect(() => {
  if (inputRef.current) {
    inputRef.current.style.height = "auto";
    inputRef.current.style.height = inputRef.current.scrollHeight + "px";
  }
}, [jsonInput]);
  useEffect(()=>{
    if(outputRef.current){
      outputRef.current.style.height = "auto"; 
      outputRef.current.style.height = `${outputRef.current.scrollHeight}px`;
    }
  },[stringOutput])

  return (
    <div className="max-w-6xl mx-auto p-4">
      
      <h1 className="text-2xl font-bold mb-6 text-center">🛠 JSON ↔ String Converter</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="flex-1 flex flex-col">
        <textarea
        ref= {inputRef}
        className="w-full border p-2 resize-none overflow-hidden min-h-[100px]"
        placeholder='Enter JSON or String here...'
        value = {jsonInput}
      
        onChange={(e) =>{ setJsonInput(e.target.value);
        }}
         rows="1"
      />

        </div>
        <div className="flex-1 flex flex-col"> 
         <textarea
         ref= {outputRef}
         readOnly
        className="w-full border p-2 mb-4 resize-none overflow-hidden"
        placeholder='Output here...'
        value = {stringOutput}
      />

        </div>
      </div>
      
    <div>
      <button onClick={handleConverToString}>Convert to String</button>
      {/* <button onClick={handleConvertToJson}>Convert to JSON</button> */}
    </div>


      
        {parsedOutput && (
      <div>
        <h2>Parsed JSON:</h2> 
        <pre>{parsedOutput}</pre>
        </div>
        )}
    </div>
  )
};

export default JsonConverter