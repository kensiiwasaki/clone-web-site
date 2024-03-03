const ChallengeComponents = () => {
  return (
    <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] mt-[-200px] ml-[-200px] rounded-[2px] shadow-[1px_2px_10px_0px_rgba(0,0,0,0.3)] bg-[#E56262] text-white">
      <div className="absolute w-[220px] h-[220px] top-[90px] left-[90px]">
        <div className="absolute z-30 w-[30px] h-[30px] top-[95px] left-[95px] bg-white rounded-full animate-jump-jump-1"></div>
        <div className="absolute z-20 w-[60px] h-[60px] top-[80px] left-[80px] bg-white rounded-full animate-jump-jump-2"></div>
        <div className="absolute z-10 w-[90px] h-[90px] top-[65px] left-[65px] bg-white rounded-full animate-jump-jump-3"></div>
      </div>
    </div>
  );
};

export default ChallengeComponents;
