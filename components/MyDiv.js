"use client";

import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["500", "700"],
  subsets: ["latin"],
});
const MyDiv = ({ children, className }) => {
  // A custom div to get similiar borders everywhere. ik i am lazy!
  return (
    <div
      className={`w-fit p-2 sm:px-3  border-2 rounded-lg border-gray-100 ${className} ${poppins.className}`}
    >
      {children}
    </div>
  );
};

export default MyDiv;
