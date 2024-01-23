import React from "react";

const ChallengeComponent = () => {
  return (
    <div className="absolute top-1/2 left-1/2 w-96 h-96 mt-[-200px] ml-[-200px] rounded-sm bg-gradient-to-tr from-[#43389F] to-[#4ec6ca] text-white font-mono antialiased">
      <div className="absolute top-1/2 left-1/2 transform-[-50%,-50%]">
        <div className="relative h-24 w-48">
          <div className="absolute z-10 top-0 left-[-16px] h-10 w-5 bg-white rounded-sm shadow-md"></div>
          <div className="absolute z-20 top-0 left-0 h-24 w-6 bg-white rounded-sm shadow-md"></div>
          <div className="absolute z-10 top-0 left-[17px] box-border h-[100px] w-[100px] rounded-full border-[24px] border-white shadow-md"></div>
          <div className="absolute z-9 top-0 left-[100px] box-border h-[100px] w-[100px] rounded-full border-[24px] border-white shadow-md"></div>
        </div>
        <span className="relative z-20 block text-6xl leading-[60px] uppercase font-bold mt-1.5">
          Days
        </span>
        <span className="relative z-20 block text-lg leading-5 uppercase font-bold tracking-wider">
          CSS Challenge
        </span>
      </div>
    </div>
  );
};

export default ChallengeComponent;
