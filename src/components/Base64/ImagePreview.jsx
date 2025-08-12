import React from 'react'

const ImagePreview = ({ getImageSrc }) => {
  return (
     <div className=" mt-10 rounded-2xl p-4 bg-gradient-to-br from-white/60 to-white/20 backdrop-blur-md border border-gray-200 shadow-lg transition-all duration-300 max-w-md mx-auto">
          <p className="mb-3 font-semibold text-gray-700 border-b border-gray-300 pb-2 text-lg">
            Preview
          </p>

          <div className="flex justify-center items-center bg-white/80 border border-gray-200 rounded-xl p-2 overflow-hidden max-h-[200px] shadow-inner">
            <img
              src={getImageSrc()}
              alt="Base64 Preview"
              className="max-w-full max-h-[180px] object-contain rounded-md hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
  )
}

export default ImagePreview