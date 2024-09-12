import React from "react";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["500", "700"],
  subsets: ["latin"],
});
const ProgressBar = ({ label, percentage, color }) => {
  // Figured this out thanks to v0.dev!! chatgpt who?
  return (
    <div
      className={`flex items-center justify-between mb-4 ${poppins.className}`}
    >
      <div className="flex-grow px-2">
        <div className="text-base font-medium text-gray-700 mb-3">{label}</div>
        <div className="flex justify-between items-center space-x-9 ">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="h-2.5 rounded-full"
              style={{
                width: `${percentage}%`,
                backgroundColor: color,
              }}
            ></div>
          </div>
          <div className="text-sm font-medium" style={{ color: color }}>
            {percentage}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
