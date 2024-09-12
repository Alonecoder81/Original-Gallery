import React, { useState } from "react";
import AboutMeWidget from "./components/AboutMeWidget";
import GalleryWidget from "./components/GalleryWidget";

const App = () => {
  return (
    <div className="min-h-screen flex justify-center bg-gray-100 flex-wrap">
      <div className="w-2/3 flex">
        <div className="w-1/2 hidden lg:block"></div>
        
        <div className="w-full lg:w-1/2 flex flex-col space-y-4">
          <AboutMeWidget />
          <GalleryWidget />
        </div>
      </div>
    </div>
  );
};

export default App;
