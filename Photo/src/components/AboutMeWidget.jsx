import React, { useState } from "react";

const AboutMeWidget = () => {
  const [activeTab, setActiveTab] = useState("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <p className="text-white">
            My name is Ajay Kumar. I am from Bihar but currently live in Dharamshala, Himachal Pradesh. I am learning coding here. I completed my graduation from Verdhman Mahaveer College, Pawapuri (Patliputra University). I have knowledge of HTML, CSS, JavaScript, React, Tailwind CSS, etc. There are six members in my family: two brothers, two sisters, and my parents. I like playing cricket.
          </p>
        );
      case "experiences":
        return <p className="text-white">I have some experience in making projects because I have worked on several projects.</p>;
      case "recommended":
        return <p></p>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-slate-800 p-6 rounded-lg shadow-md">
      <div className="flex flex-col lg:flex-row mb-4 bg-black rounded-md">
        <button
          className={`text-lg lg:text-xl flex-1 py-2 text-white font-medium text-center bg-black rounded-md hover:bg-slate-700 ${
            activeTab === "about" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setActiveTab("about")}
        >
          About Me
        </button>
        <button
          className={`text-lg lg:text-xl flex-1 py-2 text-white font-medium text-center bg-black rounded-md hover:bg-slate-700 ${
            activeTab === "experiences" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setActiveTab("experiences")}
        >
          Experiences
        </button>
        <button
          className={`text-lg lg:text-xl flex-1 py-2 text-white font-medium text-center bg-black rounded-md hover:bg-slate-700 ${
            activeTab === "recommended" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setActiveTab("recommended")}
        >
          Recommended
        </button>
      </div>
      <div>{renderContent()}</div>
    </div>
  );
};

export default AboutMeWidget;
