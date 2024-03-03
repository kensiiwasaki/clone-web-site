import React from "react";

const ChallengeComponents = () => {
  return (
    <div className="absolute top-1/2 left-1/2 w-400 h-400 mt-[-200px] ml-[-200px] rounded-lg shadow-lg bg-red-500 text-white">
      <div className="absolute w-220 h-220 top-90 left-90">
        <div className="absolute z-30 w-30 h-30 top-95 left-95 bg-white rounded-full animate-jump-jump-1"></div>
        <div className="absolute z-20 w-60 h-60 top-80 left-80 bg-white rounded-full animate-jump-jump-2"></div>
        <div className="absolute z-10 w-90 h-90 top-65 left-65 bg-white rounded-full animate-jump-jump-3"></div>
      </div>
    </div>
  );
};

export default ChallengeComponents;
