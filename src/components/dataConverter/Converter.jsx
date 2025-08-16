import React, { useEffect, useState, useRef } from "react";
import FileUploader from "./FileUploader";
import yaml from "js-yaml";
import TypeButtons from "./TypeButtons";
import TextAreaBox from "./TextAreaBox";
import FileDownloader from "./FileDownloader";
import {
  jsonToString,
  stringToJson,
  yamlToJson,
  jsonToYaml,
  yamlToString,
  stringToYaml,
} from "../../utils/converterUtils";
function Converter() {
  const [jsonInput, setJsonInput] = useState("");
  const [convertedOutput, setconvertedOutput] = useState("");
  const [inputType, setInputType] = useState("json");
  const [outputType, setOutputType] = useState("string");
  const outputRef = useRef(null);

  const inputRef = useRef(null);

  const buttonOptions = ["json", "string", "yaml"];

  const handleInputTypeChange = (type) => {
    setInputType(type);
    if (type === "json" && outputType === "json") {
      setOutputType("string");
    } else if (type === "string" && outputType === "string") {
      setOutputType("json");
    } else if (type === "yaml" && outputType === "yaml") {
      setOutputType("string");
    }
  };

  const handleOutputTypeChange = (type) => {
    setOutputType(type);
    if (type === "json" && inputType === "json") {
      setInputType("string");
    } else if (type === "string" && inputType === "string") {
      setInputType("json");
    } else if (type === "yaml" && inputType === "yaml") {
      setInputType("string");
    }
  };

  useEffect(() => {
    let result;
    if (inputType === "json" && outputType === "string") {
      result = jsonToString(jsonInput);
    } else if (inputType === "string" && outputType === "json") {
      result = stringToJson(jsonInput);
    } else if (inputType === "json" && outputType === "yaml") {
      result = jsonToYaml(jsonInput);
    } else if (inputType === "yaml" && outputType === "json") {
      result = yamlToJson(jsonInput);
    } else if (inputType === "yaml" && outputType === "string") {
      result = yamlToString(jsonInput);
    } else if (inputType === "string" && outputType === "yaml") {
      result = stringToYaml(jsonInput);
    }
    setconvertedOutput(result);
  }, [jsonInput, inputType, outputType]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = inputRef.current.scrollHeight + "px";
    }
  }, [jsonInput]);
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.style.height = "auto";
      outputRef.current.style.height = `${outputRef.current.scrollHeight}px`;
    }
  }, [convertedOutput]);

return (
  <div className="min-h-screen w-full bg-gray-50 text-black dark:bg-gray-900 dark:text-white">
    <div className="max-w-6xl mx-auto p-4">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">🛠 Text Converter</h1>
      </div>

      {/* File Upload & Download Section */}
      <div className="flex justify-between items-center mb-6">
        <FileUploader onFileRead={setJsonInput} inputType={inputType} />
        <FileDownloader value={convertedOutput} type={outputType} />
      </div>

      {/* Input & Output Section */}
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        
        {/* Input Section */}
        <div className="flex-1 flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <TypeButtons
            type={inputType}
            options={buttonOptions}
            onChange={handleInputTypeChange}
          />
          <TextAreaBox
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            placeholder={`Enter ${inputType.toUpperCase()} here...`}
            readOnly={false}
            ref={inputRef}
            className="bg-gray-100 dark:bg-gray-700 text-black dark:text-white rounded p-2 mt-2"
          />
        </div>

        {/* Output Section */}
        <div className="flex-1 flex flex-col bg-white  dark:bg-gray-800 rounded-lg shadow p-4">
          <TypeButtons
            type={outputType}
            options={buttonOptions}
            onChange={handleOutputTypeChange}
          />
          <TextAreaBox
            value={convertedOutput}
            placeholder="Output here..."
            readOnly={true}
            ref={outputRef}
            className="bg-gray-100  dark:bg-gray-700 text-black dark:text-white rounded p-2 mt-2"
          />
        </div>
      </div>

    </div>
  </div>
);

}

export default Converter;
