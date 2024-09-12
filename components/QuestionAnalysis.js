import React from "react";
import MyDiv from "./MyDiv";
import QuestionAnalysisChart from "./QuestionAnalysisChart";
import { useSelector } from "react-redux";

const QuestionAnalysis = () => {
  const {correctAnswers} = useSelector((state)=>state.user) //getting data from redux!!!
  const correct = correctAnswers.correct;
  const total = correctAnswers.total  
  return (
    <MyDiv className={" w-full xl:w-full py-7  "}>
      <div className="flex justify-between">
        <p className="font-bold text-sm md:text-base text-neutral-800">
          Question Analysis
        </p>
        <p className="font-bold text-sm md:text-base text-blue-600">{correct}/{total}</p>
      </div>
      <div className="py-2">
        <p className="text-gray-500 text-left leading-relaxed w-[85%] sm:w-[90%] text-xs sm:text-base ">
          <span className="text-gray-600 font-semibold ">
            You Scored {correct} question correct out of {total}.
          </span>{" "}
          However it still needs some improvements
        </p>
      </div>
      <div className="flex justify-center items-center py-5">
        <QuestionAnalysisChart correct={correct} total={total} />
      </div>
    </MyDiv>
  );
};

export default QuestionAnalysis;
