"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import MyDiv from "./MyDiv";
import { useSelector } from "react-redux";

const QuickStats = () => {
  const { rank, percentile, correctAnswers } = useSelector(
    (state) => state.user
  ); //Getting data from redux!!!
  const statItems = [ // i am lazy af to copy pastye the same div and change title and logo, so map function to the rescue!!!
    {
      id: 1,
      image: "/images/Trophy.png",
      title: rank,
      subTitle: "Your Rank",
      showRightBorder: true,
    },
    {
      id: 2,
      image: "/images/Notebook.png",
      title: percentile,
      subTitle: "Percentile",
      showRightBorder: true,
    },
    {
      id: 3,
      image: "/images/Tickmark.png",
      title: `${correctAnswers.correct} / ${correctAnswers.total}`,
      subTitle: "Correct Answers",
      showRightBorder: false,
    },
  ]; 
  return (
    <MyDiv className={"w-full xl:w-[670px] py-3"}>
      <p className="font-bold text-sm md:text-base text-neutral-800">
        Quick Statistics
      </p>
      <div className="flex flex-col sm:flex-row py-3 px-3">
        {statItems.map((item) => {
          return (
            <div
              key={item.id}
              className={`flex space-x-3  px-5 py-3 ${
                item.showRightBorder ? "sm:border-r-2 border-gray-100" : ""
              }`}
            >
              <div className="bg-gray-100 w-12 h-12 rounded-full flex justify-center items-center">
                <img
                  className="w-6 h-6  "
                  src={item.image}
                  alt={`${item.subTitle}_image`}
                />
              </div>
              <div>
                <p className="font-bold text-lg">{item.title}</p>
                <p className="text-gray-500 tracking-tight text-sm uppercase">
                  {item.subTitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </MyDiv>
  );
};

export default QuickStats;
