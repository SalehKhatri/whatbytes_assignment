"use client";

import ComparisonGraph from "@/components/ComparisonGraph";
import QuestionAnalysis from "@/components/QuestionAnalysis";
import QuickStats from "@/components/QuickStats";
import SyllabusWise from "@/components/SyllabusWise";
import TestDetails from "@/components/TestDetails";

export default function Home() {
  return (
    <div className="w-full bg-white min-h-screen px-2 py-4 lg:py-8 lg:pl-10 lg:pr-3 border-l-2 border-gray-100 ">
      <p className="text-neutral-800">Skill Test</p>
      <div className="py-6 flex flex-col xl:flex-row xl:space-x-4 space-y-4 xl:space-y-0">
        <div className=" flex flex-col justify-center items-center xl:justify-start xl:items-start w-full space-y-4">
          <TestDetails />
          <QuickStats />
          <ComparisonGraph />
        </div>
        <div className="flex flex-col justify-center items-center xl:justify-start xl:items-start w-full space-y-4">
          <SyllabusWise />
          <QuestionAnalysis />
        </div>
      </div>
    </div>
  );
}
