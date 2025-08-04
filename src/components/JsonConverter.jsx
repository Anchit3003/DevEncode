import React, { useEffect, useState, useRef } from "react";
import FileUploader from "./FileUploader";
import yaml from "js-yaml";

function JsonConverter() {
  const [jsonInput, setJsonInput] = useState("");
  const [convertedOutput, setconvertedOutput] = useState("");
  const [inputType, setInputType] = useState("json");
  const [outputType, setOutputType] = useState("string");
  const outputRef = useRef(null);

  const inputRef = useRef(null);

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
    if (inputType === "json" && outputType === "string") {
      console.log("Converting JSON to String");
      try {
        const obj = JSON.parse(jsonInput);
        const str = JSON.stringify(obj, null, 4);
        setconvertedOutput(JSON.stringify(str));
      } catch (e) {
        if (jsonInput === "") {
          setconvertedOutput("output will be here...");
        } else {
          setconvertedOutput("Invalid JSON input");
        }
      }
    } else if (inputType === "string" && outputType === "json") {
      try {
        if(jsonInput !==""){
          const rawString = jsonInput;
        const cleaned = rawString.slice(1, -1);
        const cleanedString = cleaned.replace(/\\n/g, "").replace(/\\"/g, '"');
        const parsedData = JSON.parse(cleanedString);
        setconvertedOutput(JSON.stringify(parsedData, null, 2));
        }
        
      } catch (e) {
        console.log(e);
        setconvertedOutput("Invalid String input");
      }
    } else if (inputType === "json" && outputType === "yaml") {
      try {
        const jsonData = JSON.parse(jsonInput);
        const yamlData = yaml.dump(jsonData);
        console.log(yamlData);
        setconvertedOutput(yamlData);
      } catch (e) {
        if (jsonInput === "") {
          setconvertedOutput("output will be here...");
        } else {
          setconvertedOutput("Invalid JSON input");
        }
      }
    } else if (inputType === "yaml" && outputType === "json") {
      try {
        const jsonData = yaml.load(jsonInput);
        const prettyJson = JSON.stringify(jsonData, null, 2);
        setconvertedOutput(prettyJson);
      } catch (e) {
        if (jsonInput === "") {
          setconvertedOutput("output will be here...");
        } else {
          setconvertedOutput("Invalid YAML input");
        }
      }
    } else if (inputType === "yaml" && outputType === "string") {
      try {
        if (jsonInput !== "") {
          const string = JSON.stringify(jsonInput);
          setconvertedOutput(string);
        }
      } catch (e) {
        if (jsonInput === "") {
          setconvertedOutput("output will be here...");
        } else {
          setconvertedOutput("Invalid YAML input");
        }
      }
    } else if (inputType === "string" && outputType === "yaml") {

      console.log("Converting String to YAML");
      try {
        if (jsonInput.startsWith('"') && jsonInput.endsWith('"')) {
          
          try {
            input = JSON.parse(jsonInput)
            setJsonInput(input);
          }catch (e) {
            setconvertedOutput("Invalid String input");
          }
        }
        const decodedYaml = jsonInput.replace(/\\n/g, "\n");
        setconvertedOutput(decodedYaml);
      } catch (e) {
        if (jsonInput === "") {
          setconvertedOutput("output will be here...");
        } else {
          setconvertedOutput("Invalid YAML input");
        }
      }
    }
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
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">
        🛠 devEncode Converter
      </h1>

      {/* <FileUploader/> */}

      {/* Input Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="flex-1 flex flex-col">
          {/* Input type buttons styled as tabs above the input box */}
          <div className="flex w-full">
            <button
              className={`flex-1 px-4 py-2 border-t border-l border-b-0 border-r-0 rounded-tl rounded-tr-none rounded-bl-none rounded-br-none focus:outline-none transition-colors duration-150 border-black ${
                inputType === "json"
                  ? "bg-white text-black font-semibold"
                  : "bg-gray-100 text-gray-500"
              }`}
              style={{ borderRight: "none", borderColor: "black" }}
              onClick={() => handleInputTypeChange("json")}
            >
              JSON
            </button>
            <button
              className={`flex-1 px-4 py-2 border-t border-b-0 border-l border-r-0 rounded-none focus:outline-none transition-colors duration-150 border-black ${
                inputType === "string"
                  ? "bg-white text-black font-semibold"
                  : "bg-gray-100 text-gray-500"
              }`}
              style={{ borderRight: "none", borderColor: "black" }}
              onClick={() => handleInputTypeChange("string")}
            >
              String
            </button>
            <button
              className={`flex-1 px-4 py-2 border-t border-b-0 border-l border-r rounded-tr rounded-tl-none rounded-bl-none rounded-br-none focus:outline-none transition-colors duration-150 border-black ${
                inputType === "yaml"
                  ? "bg-white text-black font-semibold"
                  : "bg-gray-100 text-gray-500"
              }`}
              style={{ borderColor: "black" }}
              onClick={() => handleInputTypeChange("yaml")}
            >
              YAML
            </button>
          </div>
          <textarea
            ref={inputRef}
            className="w-full border p-2 resize-none overflow-hidden min-h-[150px] h-[150px] rounded-b"
            placeholder={`Enter ${inputType.toUpperCase()} here...`}
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            rows="1"
          />
        </div>

        {/* Output Section */}
        <div className="flex-1 flex flex-col">
          {/* Input type buttons styled as tabs above the input box */}
          <div className="flex w-full">
            <button
              className={`flex-1 px-4 py-2 border-t border-l border-b-0 border-r-0 rounded-tl rounded-tr-none rounded-bl-none rounded-br-none focus:outline-none transition-colors duration-150 border-black ${
                outputType === "json"
                  ? "bg-white text-black font-semibold"
                  : "bg-gray-100 text-gray-500"
              }`}
              style={{ borderRight: "none", borderColor: "black" }}
              onClick={() => handleOutputTypeChange("json")}
            >
              JSON
            </button>
            <button
              className={`flex-1 px-4 py-2 border-t border-b-0 border-l border-r-0 rounded-none focus:outline-none transition-colors duration-150 border-black ${
                outputType === "string"
                  ? "bg-white text-black font-semibold"
                  : "bg-gray-100 text-gray-500"
              }`}
              style={{ borderRight: "none", borderColor: "black" }}
              onClick={() => handleOutputTypeChange("string")}
            >
              String
            </button>
            <button
              className={`flex-1 px-4 py-2 border-t border-b-0 border-l border-r rounded-tr rounded-tl-none rounded-bl-none rounded-br-none focus:outline-none transition-colors duration-150 border-black ${
                outputType === "yaml"
                  ? "bg-white text-black font-semibold"
                  : "bg-gray-100 text-gray-500"
              }`}
              style={{ borderColor: "black" }}
              onClick={() => handleOutputTypeChange("yaml")}
            >
              YAML
            </button>
          </div>

          <textarea
            ref={outputRef}
            readOnly
            className="w-full border p-2 mb-4 resize-none overflow-hidden min-h-[150px] h-[150px] rounded-b"
            placeholder="Output here..."
            value={convertedOutput}
          />
        </div>
      </div>

      <div>
        {/* <button onClick={handleConverToString}>Convert to String</button> */}
        {/* <button onClick={handleConvertToJson}>Convert to JSON</button> */}
      </div>
    </div>
  );
}

export default JsonConverter;
