import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import TextComponent from "./TextComponent";
import ImagePreview from "./ImagePreview";
import { useTranslation } from "react-i18next";

const Base64 = () => {
  const { t } = useTranslation();
  const [isImageInput, setImageInput] = useState(true);
  const [imageOutput, setImageOutput] = useState("");
  const [base64Input, setBase64Input] = useState("");
  const [text, setText] = useState(false);

  const handleToggle = () => setImageInput((prev) => !prev);

  const handleFileSelect = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => setImageOutput(e.target.result);
    reader.readAsDataURL(file);
  };

  const handleChange = (event) => setBase64Input(event.target.value);

  const getImageSrc = () => {
    if (!base64Input) return "";
    if (base64Input.startsWith("data:image")) return base64Input;
    return `data:image/png;base64,${base64Input}`;
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 py-10 px-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8 text-left">
        <h1 className="text-3xl font-bold mb-2">🖼 {t('base64.title')}</h1>
        <p className="text-gray-600 dark:text-gray-400">
          {t("base64.description")}
        </p>
      </div>

      {/* Toggle Button */}
      <div className="flex justify-center mb-8">
        <button
          className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-md"
          onClick={handleToggle}
        >
          {isImageInput
            ? t("base64.button1")
            : t("base64.button2")}
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {isImageInput ? (
          <>
            {/* Upload Section */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold mb-4">{t("base64.input1")}</h2>
              <ImageUpload onFileSelect={handleFileSelect} />
            </div>

            {/* Output Text Section */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold mb-4">{t("base64.output1")}</h2>
              <TextComponent
                imageOutput={imageOutput}
                readOnly={true}
                text={text}
                setText={setText}
              />
            </div>
          </>
        ) : (
          <>
            {/* Input Base64 Section */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold mb-4">Enter Base64</h2>
              <TextComponent onChange={handleChange} readOnly={false} />
            </div>

            {/* Preview Section */}
            {base64Input && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold mb-4">Preview</h2>
                <ImagePreview getImageSrc={getImageSrc} />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Base64;
