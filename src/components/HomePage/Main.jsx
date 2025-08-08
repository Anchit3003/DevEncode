import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const tools = [
  {
    name: "Converter",
    path: "/converter",
    description: "Convert JSON, YAML, and String formats.",
  },
  // Add more tools here as you build them
];

const Main = () => {
  return (
    <>

      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          DevEncode Tools
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          Choose a tool to get started:
        </p>
        <div className="grid gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.name}
              to={tool.path}
              className="block px-8 py-6 bg-white border border-black rounded-lg shadow hover:bg-gray-100 transition"
            >
              <div className="text-2xl font-semibold mb-2">{tool.name}</div>
              <div className="text-gray-500">{tool.description}</div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;
