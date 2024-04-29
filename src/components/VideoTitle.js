import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-80 text-left px-20 absolute w-screen aspect-video bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold text-white">{title}</h1>
      <p className="text-white w-1/5 mt-4 mb-4">{overview}</p>
      <div className="mt-4">
        <button className=" w-28 py-2 rounded-md bg-white mr-4 hover:bg-opacity-80 ">
          ▶ Play
        </button>
        <button className=" w-28 py-2 rounded-md bg-gray-600 mr-4 text-white ">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
