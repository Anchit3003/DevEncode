import React, { useEffect, useMemo, useState } from "react";

const JsonValidator = () => {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(null); // null | true | false
  const [errorMsg, setErrorMsg] = useState("");
  const [pretty, setPretty] = useState("");
  const [copied, setCopied] = useState(false);

  // Validate whenever input changes
  useEffect(() => {
    if (!input.trim()) {
      setIsValid(null);
      setErrorMsg("");
      setPretty("");
      return;
    }
    try {
      const obj = JSON.parse(input);
      setIsValid(true);
      setErrorMsg("");
      setPretty(JSON.stringify(obj, null, 2));
    } catch (err) {
      setIsValid(false);
      // Try to extract line/column if available
      let message = err.message || "Invalid JSON";
      setErrorMsg(message);
      setPretty("");
    }
  }, [input]);

  const statusBadge = useMemo(() => {
    if (isValid === null)
      return (
        <span className="inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
          Idle
        </span>
      );
    if (isValid)
      return (
        <span className="inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs bg-green-100 text-green-800 dark:bg-green-800/40 dark:text-green-200">
          ✅ Valid JSON
        </span>
      );
    return (
      <span className="inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs bg-red-100 text-red-800 dark:bg-red-800/40 dark:text-red-200">
        ❌ Invalid JSON
      </span>
    );
  }, [isValid]);

  const handlePrettify = () => {
    try {
      const obj = JSON.parse(input);
      const formatted = JSON.stringify(obj, null, 2);
      setInput(formatted);
    } catch {
      // ignore; already shows error
    }
  };

  const handleMinify = () => {
    try {
      const obj = JSON.parse(input);
      const min = JSON.stringify(obj);
      setInput(min);
    } catch {
      // ignore; already shows error
    }
  };

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleDownload = (filename = "data.json") => {
    const blob = new Blob(
      [isValid ? (pretty || input) : input || ""],
      { type: "application/json;charset=utf-8" }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const loadSample = () => {
    const sample = {
      name: "DevEncode",
      tools: ["Converter", "Base64", "JSON Validator"],
      active: true,
      count: 3
    };
    setInput(JSON.stringify(sample, null, 2));
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 text-black dark:bg-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">🧪 JSON Validator</h1>
          {statusBadge}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={loadSample}
            className="px-3 py-1.5 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Load Sample
          </button>
          <button
            onClick={() => setInput("")}
            className="px-3 py-1.5 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Clear
          </button>
          <button
            onClick={handlePrettify}
            className="px-3 py-1.5 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Prettify
          </button>
          <button
            onClick={handleMinify}
            className="px-3 py-1.5 rounded bg-indigo-600 text-white hover:bg-indigo-700"
          >
            Minify
          </button>
          <button
            onClick={() => handleCopy(isValid ? (pretty || input) : input)}
            className="px-3 py-1.5 rounded bg-gray-900 text-white hover:bg-black dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            Copy
          </button>
          <button
            onClick={() => handleDownload("validated.json")}
            className="px-3 py-1.5 rounded bg-emerald-600 text-white hover:bg-emerald-700"
          >
            Download
          </button>
          {copied && (
            <span className="text-green-500 font-medium">Copied to clipboard!!</span>
          )}
        </div>

        {/* Editor / Input */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Input JSON
            </label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='Paste JSON here…'
              className="w-full min-h-[280px] p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-mono leading-6 outline-none focus:ring-2 focus:ring-blue-500 resize-y"
            />
            {isValid === false && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                {errorMsg}
              </p>
            )}
          </div>

          {/* Pretty Output */}
          <div>
            <label className="block text-sm font-medium mb-2">
              {isValid ? "Formatted Output" : "Output"}
            </label>
            <pre className="w-full min-h-[280px] p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-mono leading-6 overflow-auto">
{isValid ? pretty : ""}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JsonValidator;
