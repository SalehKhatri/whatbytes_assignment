import React from "react";
import MyDiv from "./MyDiv";
import ProgressBar from "./ProgressBar";

const SyllabusWise = () => {
  const data = [
    { label: "HTML Tools, Forms, History", percentage: 80, color: "#3b82f6" },
    { label: "Tags & References in HTML", percentage: 60, color: "#f97316" },
    { label: "Tables & References in HTML", percentage: 24, color: "#ef4444" },
    { label: "Tables & CSS Basics", percentage: 96, color: "#22c55e" },
  ];
  return (
    <MyDiv className={" w-full xl:w-full py-7 "}>
      <p className="font-bold text-sm md:text-base text-neutral-800">
        Syllabus Wise Analysis
      </p>
      <div className="w-full py-4 space-y-12">
        {data.map((item, index) => (
            <ProgressBar key={index} {...item} />
        ))}
      </div>
    </MyDiv>
  );
};

export default SyllabusWise;
