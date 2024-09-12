"use client";

import React from "react";
import MyDiv from "./MyDiv";
import { useState } from "react";
import UpdateStatsModal from "./UpdateStatsModal";

const TestDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); //State to handle modal visibility
  const toogleModal = () => setIsModalOpen((state) => !state);
  return (
    <>
      {isModalOpen && <UpdateStatsModal toogleModal={toogleModal} />}

      <MyDiv
        className={
          "w-full xl:w-[670px] flex flex-col sm:flex-row justify-center items-center sm:space-x-4 space-y-4 sm:space-y-0 py-7"
        }
      >
        <div>
          <img
            className="w-[80px] sm:w-[50px]"
            src="/images/html_logo.png"
            alt="html5_logo"
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-3  sm:space-x-2">
          <div className="space-y-1 text-center sm:text-left">
            <p className="font-bold text-sm md:text-base text-neutral-800">
              Hyper Text Markup Language
            </p>
            <p className="text-gray-600 font-medium tracking-tight text-sm md:text-base">
              Questions: 08 | Duration: 15 mins | Submitted on 12 Sept 2024
            </p>
          </div>
          <div>
            <button
              className="bg-blue-900 hover:bg-blue-700 transition-all rounded-lg border-[3px] border-neutral-800 text-white font-medium py-3 px-6 text-sm"
              onClick={toogleModal}
            >
              Update
            </button>
          </div>
        </div>
      </MyDiv>
    </>
  );
};

export default TestDetails;
