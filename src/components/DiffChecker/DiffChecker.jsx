import React, { useState } from "react";

const DiffCheckerLayout = () => {
  const [inputState, setInputState] = useState("");
  const [modifiedState, setModifiedState] = useState("");
  const [diffResult, setDiffResult] = useState([]);

  const handleInputChange = (e) => {
    setInputState(e.target.value);
  };
  const handleOutputChange = (e) => {
    setModifiedState(e.target.value);
  };

  const handleCompare = () => {
    const lines1 = inputState.split("\n");
    const lines2 = modifiedState.split("\n");
    const maxLength = Math.max(lines1.length, lines2.length);
    const result = [];
    let i = 0,
      j = 0;

    while (i < lines1.length || j < lines2.length) {
      if (i < lines1.length && j < lines2.length) {
        if (lines1[i] === lines2[j]) {
          result.push({ type: "same", text: lines1[i] });
          i++;
          j++;
        } else {
          if (!lines2.includes(lines1[i])) {
            result.push({ type: "removed", text: lines1[i] });
            i++;
          } else if (!lines1.includes(lines2[j])) {
            result.push({ type: "added", text: lines2[j] });
            j++;
          } else {
            result.push({
              type: "changed",
              text: `- ${lines1[i]} | + ${lines2[j]}`,
            });
            i++;
            j++;
          }
        }
      } else if (i < lines1.length) {
        result.push({ type: "removed", text: lines1[i] });
        i++;
      } else if (j < lines2.length) {
        result.push({ type: "added", text: lines2[j] });
        j++;
      }

      setDiffResult(result)
    }
  };
  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 py-10 px-4">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="text-3xl font-bold">🔍 Text Diff Checker</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Compare two blocks of text to see what changed.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Controls */}
        <div className="flex flex-wrap items-center gap-2 justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleCompare}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
            >
              Compare
            </button>
            <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-100 shadow hover:bg-gray-300 dark:hover:bg-gray-700 transition">
              Swap
            </button>
            <button className="px-4 py-2 rounded-lg bg-rose-600 text-white font-medium shadow hover:bg-rose-700 transition">
              Clear
            </button>
          </div>

          {/* Options (visual only) */}
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-sm cursor-default">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 dark:border-gray-600"
              />
              Ignore case
            </label>
            <label className="flex items-center gap-2 text-sm cursor-default">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 dark:border-gray-600"
              />
              Ignore whitespace
            </label>
          </div>
        </div>

        {/* Editors */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
              <h2 className="font-semibold">Original (Left)</h2>
              <div className="flex items-center gap-2 text-sm">
                <button className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-700">
                  Paste
                </button>
                <button className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-700">
                  Clear
                </button>
              </div>
            </div>
            <textarea
              onChange={handleInputChange}
              placeholder="Paste or type the original text here…"
              className="w-full min-h-[260px] p-4 font-mono text-sm bg-transparent outline-none resize-y text-gray-900 dark:text-gray-100"
            />
          </div>

          {/* Right */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
              <h2 className="font-semibold">Modified (Right)</h2>
              <div className="flex items-center gap-2 text-sm">
                <button className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-700">
                  Paste
                </button>
                <button className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-700">
                  Clear
                </button>
              </div>
            </div>
            <textarea
              onChange={handleOutputChange}
              placeholder="Paste or type the modified text here…"
              className="w-full min-h-[260px] p-4 font-mono text-sm bg-transparent outline-none resize-y text-gray-900 dark:text-gray-100"
            />
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="inline-flex items-center gap-2">
            <span className="h-3 w-3 rounded bg-emerald-500/30 ring-1 ring-emerald-500"></span>
            Added
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-3 w-3 rounded bg-rose-500/30 ring-1 ring-rose-500"></span>
            Removed
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-3 w-3 rounded bg-amber-500/30 ring-1 ring-amber-500"></span>
            Changed
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-3 w-3 rounded bg-gray-400/30 ring-1 ring-gray-400"></span>
            Unchanged
          </span>
        </div>

        {/* Results Panel (visual placeholder) */}

          {/* Placeholder lines */}
          <div className="mt-6 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2 dark:text-white">Result:</h3>
        <pre className="whitespace-pre-wrap text-sm">
          {diffResult.map((line, index) => (
            <div
              key={index}
              className={`${
                line.type === "added"
                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                  : line.type === "removed"
                  ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                  : "text-gray-800 dark:text-gray-200"
              } px-2 py-1 rounded`}
            >
              {line.type === "added" ? "+ " : line.type === "removed" ? "- " : "  "}
              {line.text}
            </div>
          ))}
        </pre>
      </div>
          {/* <div className="p-4 font-mono text-sm leading-6 space-y-1">
            {diffResult.length === 0 ? (
              <p className="text-gray-500"> No Comparison yet.</p>
            ) : (
              diffResult.map((result, index) => (
                <div
                  key={index}
                  className={`px-2 py-1 rounded ${
                    result.type === "same"
                      ? "bg-transparent"
                      : result.type === "added"
                      ? "rounded bg-emerald-500/10 ring-1 ring-emerald-500/40"
                      : "bg-rose-500/10 ring-1 ring-rose-500/40"
                  }`}
                >
                  {result.type === "added"
                    ? "+ "
                    : result.type === "removed"
                    ? "- "
                    : "  "}
                  {result.text}
                </div>
              ))
            )} */}

            {/* <div className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-700/60">Line 1 — unchanged</div>
            <div className="px-2 py-1 rounded bg-emerald-500/10 ring-1 ring-emerald-500/40">
              + Line 2 — added text example
            </div>
            <div className="px-2 py-1 rounded bg-rose-500/10 ring-1 ring-rose-500/40">
              − Line 3 — removed text example
            </div>
            <div className="px-2 py-1 rounded bg-amber-500/10 ring-1 ring-amber-500/40">
              ~ Line 4 — changed text example
            </div> */}
          {/* </div> */}


        {/* Footer actions (optional) */}
        <div className="flex flex-wrap items-center justify-end gap-2">
          <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-100 shadow hover:bg-gray-300 dark:hover:bg-gray-700 transition">
            Export Diff
          </button>
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition">
            Compare Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiffCheckerLayout;
