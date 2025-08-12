import React from "react";

const JsonValidator = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl border border-blue-200 text-center animate-fadeIn">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          🚧 Coming Soon
        </h1>
        <p className="text-gray-600">
          Our JSON Validator tool is under construction. Stay tuned!
        </p>
        <div className="mt-4 flex justify-center space-x-2">
          <span className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></span>
          <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
          <span className="w-3 h-3 bg-blue-600 rounded-full animate-bounce [animation-delay:0.4s]"></span>
        </div>
      </div>
    </div>
  );
};

export default JsonValidator;
