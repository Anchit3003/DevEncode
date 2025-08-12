const TextComponent = ({imageOutput,readOnly,onChange}) => {
  return (
    <div className=" border-black max-w-2xl mx-auto rounded-lg mt-4">
      <textarea
        id="styled-textarea"
        className="
          w-full p-2 resize-none
          min-h-[150px] h-[150px] font-mono text-sm outline-none
          overflow-y-auto rounded-md border border-black
        "
        placeholder="Start typing your message here..."
        value={imageOutput}
        readOnly={readOnly}
        onChange={onChange}
      />
    </div>
  );
};

export default TextComponent;
