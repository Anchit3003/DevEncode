import React, { useState, useRef } from "react";
import ImageUpload from "./ImageUpload";
import TextComponent from "./TextComponent";
import ImagePreview from "./ImagePreview";
const Base64 = () => {
  const [isImageInput, setImageInput] = useState(true);
  const [imageOutput, setImageOutput] = useState("");
  const [base64Input, setBase64Input] = useState("");

  const handleToggle = () => {
    setImageInput((prev) => !prev);
  };
  const handleFileSelect = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageOutput(e.target.result);
    };
    reader.readAsDataURL(file);
  };
  const handleChange = (event) => {
    setBase64Input(event.target.value);
  };
  const getImageSrc = ()=>{
    if(!base64Input) return ""

    if((base64Input.startsWith("data:image"))) return base64Input;

    return `data:image/png;base64,${base64Input}`;

  }
  return (
    <>
      <div className="flex justify-center mb-6">
        <button
          className="px-6 py-2 rounded border border-black bg-blue-600 text-white font-semibold transition"
          onClick={handleToggle}
        >
          {isImageInput
            ? "Switch to Base64 → Image"
            : "Switch to Image → Base64"}
        </button>
      </div>
      {isImageInput ? (
        <div>
          <ImageUpload onFileSelect={handleFileSelect} />

          <TextComponent imageOutput={imageOutput} readOnly={true} />
        </div>
      ) : (
        <div>
           <TextComponent
          onChange={handleChange}
          readOnly={false}
        />
        {base64Input &&  <ImagePreview getImageSrc={getImageSrc}/> }
      

        </div>
       
          )
     
      }
    </>
  );
};

export default Base64;
