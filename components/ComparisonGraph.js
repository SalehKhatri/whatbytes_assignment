"use client";
import React from "react";
import MyDiv from "./MyDiv";
import ComparisonLineChart from "./ComparisonLineChart";
import { useSelector } from "react-redux";

const ComparisonGraph = () => {
  // Dummy data to plot graph!!!
  const data = [
    { percentile: 0, students: 2 },
    { percentile: 10, students: 4 },
    { percentile: 20, students: 7 },
    { percentile: 30, students: 21 },
    { percentile: 40, students: 20 },
    { percentile: 50, students: 26 },
    { percentile: 60, students: 24 },
    { percentile: 70, students: 18 },
    { percentile: 80, students: 11 },
    { percentile: 90, students: 4 },
    { percentile: 100, students: 1 },
  ];
  const { percentile } = useSelector((state) => state.user); //Getting percentile from redux
  return (
    <MyDiv className={"w-full  xl:w-[670px] py-3 "}>
      <p className="font-bold text-sm md:text-base text-neutral-800">
        Comparison Graph
      </p>
      <div className="flex justify-between py-3">
        <p className="text-gray-500 text-left leading-relaxed w-[85%] sm:w-[90%] text-xs sm:text-base ">
          <span className="text-gray-600 font-semibold ">
            You Scored {percentile}% percentile
          </span>{" "}
          which is lower than the average percentile 72% of all the engineers
          who took the assessment
        </p>
        <div className="bg-gray-100 w-12 h-12 rounded-full flex justify-center items-center">
          <img
            className="w-6 h-6  "
            src="/images/chart_increasing.png"
            alt={`graph_image`}
          />
        </div>
      </div>
      <div className="py-5">
        <ComparisonLineChart userPercentile={percentile} data={data} />
      </div>
    </MyDiv>
  );
};

export default ComparisonGraph;
