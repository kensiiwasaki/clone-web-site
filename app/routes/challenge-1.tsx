const ChallengeComponent = () => {
  return (
    <div className="absolute top-1/2 left-1/2 w-96 h-96 mt-[-200px] ml-[-200px] rounded-sm bg-gradient-to-tr from-[#43389F] to-[#4ec6ca] text-white font-courier antialiased">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative h-24 w-48">
          <div className="absolute z-10 top-0 left-[-16px] h-10 w-5 bg-white rounded-sm shadow-md"></div>
          <div className="absolute z-20 top-0 left-0 h-24 w-6 bg-white rounded-sm shadow-md"></div>
          <div className="absolute z-10 top-0 left-[17px] box-border h-[100px] w-[100px] rounded-full border-[24px] border-white shadow-md"></div>
          <div className="absolute z-9 top-0 left-[100px] box-border h-[100px] w-[100px] rounded-full border-[24px] border-white shadow-md"></div>
        </div>
        <span className="relative z-20 block text-[82px] leading-[60px] uppercase font-bold mt-[6px]">
          Days
        </span>
        <span className="relative z-20 block text-[23px] leading-[20px] uppercase font-bold tracking-[0.04em]">
          CSS Challenge
        </span>
      </div>
    </div>
  );
};

export default ChallengeComponent;
