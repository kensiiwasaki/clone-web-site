import { useState } from "react";

const ChallengeComponent = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenuIcon = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="h-[500px] w-[500px] inset-0 flex justify-center items-center bg-green-500">
        <div className="relative">
          <div
            className={`menu-icon cursor-pointer z-50 w-20 ${
              isActive ? "active" : ""
            }`}
            onClick={toggleMenuIcon}
          >
            <div
              className={`h-2 w-full bg-white rounded-md shadow ${
                isActive ? "animate-line1" : ""
              }`}
            ></div>
            <div
              className={`h-2 w-full bg-white rounded-md shadow my-2 ${
                isActive ? "animate-line2" : ""
              }`}
            ></div>
            <div
              className={`h-2 w-full bg-white rounded-md shadow ${
                isActive ? "animate-line3" : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeComponent;
