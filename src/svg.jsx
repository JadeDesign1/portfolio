import { useEffect, useState } from "react";
import "./App.css";

const Svg = ({ percent }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter === percent) {
        clearInterval(interval);
      } else {
        setCounter((prevCounter) =>
          prevCounter < percent ? prevCounter + 1 : percent
        );
      }
    }, 30);

    return () => clearInterval(interval);
  }, [percent, counter]);

  const circleStyle = {
    animation: `anim 2s linear forwards`,
    strokeDashoffset: 428 - (428 * counter) / 100,
  };

  return (
    <div className="relative h-[80vw] w-[80vw] max-w-[160px] max-h-[160px]">
      {/* outer */}
      <div className="outer-circle">
        {/* inner */}
        <div className="inner-circle flex items-center justify-center">
          <div id="number" className="font-semibold text-white">
            {counter}%
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 160 160"
        className="svg-circle"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stopColor="#e91e63" />
            <stop offset="100%" stopColor="#673ab7" />
          </linearGradient>
        </defs>

        <circle
          style={circleStyle}
          cx="80"
          cy="80"
          r="70"
          strokeLinecap="round"
          stroke="url(#GradientColor)"
          strokeDasharray="428"
          strokeWidth="20px"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default Svg;
