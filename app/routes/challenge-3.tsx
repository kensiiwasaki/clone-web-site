const ChallengeComponent = () => {
  return (
    <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-[2px] shadow-[1px_2px_10px_0px_rgba(0,0,0,0.3)] bg-[#272C34] text-white">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative overflow-hidden rounded-full w-[180px] h-[180px] clip-circle">
          <div className="absolute z-0 top-0 left-0 right-0 h-[124px] bg-[#7DDFFC] animate-sky-turns-black"></div>
          <div className="absolute z-2 top-[7px] left-[73px] w-[34px] h-[34px] rounded-full bg-[#FFEF00] transform-origin-[50%_400%] animate-sun-goes-down"></div>
          <div className="absolute top-[67px] left-[35px] h-[57px] w-[116px] bg-[#F4F4F4] clip-polygon animate-pyramide-shading"></div>
          <div className="absolute top-[67px] left-[93px] h-[57px] w-[58px] bg-[#DDDADA] clip-polygon animate-pyramide-shading-reverse"></div>
          <div className="absolute z-2 top-[124px] left-[-80px] h-[30px] w-[360px] bg-[rgba(0,0,0,0.2)] transform-origin-[50%_0%] clip-polygon animate-shadow-on-the-floor"></div>
          <div className="absolute z-1 bottom-0 left-0 right-0 h-[56px] bg-[#F0DE75] animate-fading-sand"></div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeComponent;
