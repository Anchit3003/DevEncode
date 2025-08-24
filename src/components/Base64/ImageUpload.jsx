import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
const ImageUpload = ({onFileSelect}) => {
    const inputRef = useRef();
    const { t } = useTranslation();

    const handleDrop = (e) =>{
        e.preventDefault();
        if(e.dataTransfer.files && e.dataTransfer.files[0]){
            onFileSelect(e.dataTransfer.files[0]);
        }
    }

    const handleClick = () =>{
        inputRef.current.click();
    }
    const handleChange = (e) => {
        if(e.target.files && e.target.files[0]){
            onFileSelect(e.target.files[0]);
        }
    }

  return (
    <div className="flex justify-center">
      <div className="w-full sm:w-96 h-40 border-2 border-dashed border-gray-400 rounded bg-gray-50 text-gray-500 flex items-center justify-center cursor-pointer transition hover:border-blue-600"
      onDrop={handleDrop}
      onClick={handleClick}>
        <input type="file" accept="image/*" className="hidden" onChange={handleChange} ref={inputRef}/>
        <span className="text-center">
          {t("base64.drag_drop")}
          <br />
          {t("base64.click_upload")}
        </span>
      </div>
    </div>


  );
};

export default ImageUpload;
