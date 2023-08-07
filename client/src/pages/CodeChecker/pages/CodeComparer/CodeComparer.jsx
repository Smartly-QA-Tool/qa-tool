import React from 'react'

function CodeComparer() {
  return (
    <div className="py-2"> 
      <div className="max-w-full my-5 mx-80">
        <label className="flex justify-center bg-gray-100 bg-opacity-30 w-full h-64 px-4 transition bg-transparent border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
          <span className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <span className="font-medium text-white">
                Drop files to Attach, or&nbsp;
              <span className="text-neutral underline">browse</span>
            </span>
          </span>
          <input type="file" name="file_upload" className="hidden" multiple />
        </label>
      </div>
    </div>
  )
}

export default CodeComparer;
