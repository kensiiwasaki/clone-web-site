import { useState } from "react";

const ChallengeComponent = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenuIcon = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-green-500">
      <div className="relative h-64 w-64">
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
  );
};

export default ChallengeComponent;
