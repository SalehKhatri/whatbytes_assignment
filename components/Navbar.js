"use client";

import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  weight: ["600", "700"],
  subsets: ["latin"],
});
const Navbar = () => {
  // Easiest component of the whole page haha
  return (
    <nav className="w-full bg-white flex items-center justify-between p-3 md:p-6 border-b-2 border-gray-100 ">
      <div className="logo flex ">
        <Link href="/">
          <img
            className="w-[140px] sm:w-[160px] md:w-[180px]"
            src="https://cdn.prod.website-files.com/65cb431fbaab685eab1f5470/65cb445e7204d21122a75be0_WHATBYTESLOGO.png"
            alt="WhatBytes_Logo"
          />
        </Link>
      </div>
      <div className="profile border-[2px] border-gray-200 rounded-lg">
        <div className="flex space-x-1 items-center p-1 ">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQEgNPtNhOIvjA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1693033284131?e=1731542400&v=beta&t=HBCtIkB2r0i3n36E7cIPvSMWTf7vAIF6nqGN13WZYvc"
            className="rounded-full"
            alt="salehkhatri_profile"
            width={30}
          />
          <p className={`${poppins.className} text-black tracking-tight  `}>
            Saleh Khatri
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
