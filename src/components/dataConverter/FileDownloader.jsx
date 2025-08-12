import React, { useEffect, useState } from "react";
import { ArrowDownOnSquareStackIcon } from "@heroicons/react/24/outline";
import styles from './FileDownloader.module.css';
const FileDownloader = ({value,type}) => {

const [fileName, setFileName] = useState("");
const [disabled,setDisabled]= useState(true)
    useEffect(() =>{
    if (type=== "json") { 
        setFileName("data.json")
    }
    else if (type === "yaml") {
        setFileName("data.yaml");
    } else if (type === "string") {
        setFileName("data.txt");
    } else {
        setFileName("data.txt");
    }
    if(value && value.trim() !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
},[type])
const handleDonwload = () => {
    const blob  = new Blob([value], {type: 'text/plain'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href =url;
    a.download= fileName;
     document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
  return (
    <button disabled={disabled}type="button" className={`btn btn-primary active:scale-90 transition-transform duration-150 ${disabled? styles.disabled:""}`} onClick={handleDonwload}>
      <ArrowDownOnSquareStackIcon className="h-7 w-7 cursor-pointer" />
    </button>
  );
};

export default FileDownloader;
