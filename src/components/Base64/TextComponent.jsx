const TextComponent = ({imageOutput,readOnly,onChange,text, setText}) => {

const handleCopy = () => { 
if(imageOutput.trim() !==""){
  navigator.clipboard.writeText(imageOutput);
  setText(true)
  setTimeout(() => setText(false), 2000);
}

}

  return (
    <div className=" border-black max-w-2xl mx-auto rounded-lg mt-4">
       <div className="flex justify-end mb-2">
        <button
          onClick={handleCopy}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-1 rounded shadow transition"
        >
          copy
        </button>
      {text && (
        <span className="text-green-500 font-medium">Copied to clipboard!!</span>
      )}
      </div>

      <textarea
        id="styled-textarea"
        className="
          w-full p-2 resize-none
          min-h-[150px] h-[150px] font-mono text-sm outline-none
          overflow-y-auto rounded-md border border-black
        "
        placeholder="Base64 path"
        value={imageOutput}
        readOnly={readOnly}
        onChange={onChange}
      />
     
    </div>
  );
};

export default TextComponent;
