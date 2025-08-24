import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const Main = () => {  
  const { t } = useTranslation();
  const tools = [
  {
    name: t('home.tool1_title'),
    path: "/converter",
    description: t('home.tool1_description'),
  },{
    name: t('home.tool2_title'),
    path: "/base64",
    description: t('home.tool2_description'),
  },
  {
    name: t('home.tool3_title'),
    path: "/json/validator",
    description: t('home.tool3_description'),
  },
  {
    name: t('home.tool4_title'),
    path: "/diff-checker",
    description: t('home.tool4_description'),
  }
  // Add more tools here as you build them
];
  return (
    <div className="bg-gray-50 text-black dark:bg-gray-900 dark:text-white min-h-screen">
    <div className="min-h-screen flex flex-col items-center justify-center">

       
        <h1 className="text-4xl font-bold mb-6">
         {t('home.title')}
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          {t('home.description')}
        </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.name}
              to={tool.path}
              className="dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 block px-2 py-1 bg-white border border-black rounded-lg shadow hover:bg-gray-100 transition"
            >
              <div className="text-2xl font-semibold mb-2">{tool.name}</div>
              <div className="text-gray-500">{tool.description}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
