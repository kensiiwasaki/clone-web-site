import React from "react";

const ChallengeComponents = () => {
  return (
    <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] mt-[-200px] ml-[-200px] rounded-[2px] shadow-[1px_2px_10px_0px_rgba(0,0,0,0.3)] bg-[#E56262] text-white">
      <div className="absolute w-220 h-220 top-90 left-90">
        <div className="absolute z-30 w-30 h-30 top-95 left-95 bg-white rounded-full animate-jump-jump-1"></div>
        <div className="absolute z-20 w-60 h-60 top-80 left-80 bg-white rounded-full animate-jump-jump-2"></div>
        <div className="absolute z-10 w-90 h-90 top-65 left-65 bg-white rounded-full animate-jump-jump-3"></div>
      </div>
    </div>
  );
};

export default ChallengeComponents;
