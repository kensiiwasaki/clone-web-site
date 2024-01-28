import { useState } from "react";

const ChallengeComponent = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenuIcon = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-green-500">
      <div className="relative">
        <div
          className={`menu-icon cursor-pointer z-50 w-20 ${
            isActive ? "active" : ""
          }`}
          onClick={toggleMenuIcon}
        >
          <div
            className={`h-2 w-full bg-white rounded-md shadow transition-all duration-200 ease-in-out ${
              isActive ? "transform rotate-45 translate-y-1.5" : ""
            }`}
          ></div>
          <div
            className={`h-2 w-full bg-white rounded-md shadow transition-all duration-200 ease-in-out my-2 ${
              isActive ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`h-2 w-full bg-white rounded-md shadow transition-all duration-200 ease-in-out ${
              isActive ? "transform -rotate-45 -translate-y-1.5" : ""
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeComponent;
