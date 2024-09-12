"use client";

import { ChartNoAxesColumn, BookOpen, FileText, Menu } from "lucide-react";
import { Poppins } from "next/font/google";
import { useState, useRef, useEffect } from "react";

const poppins = Poppins({
  weight: ["600", "700"],
  subsets: ["latin"],
});

const menuItems = [
  {
    id: 0,
    name: "Dashboard",
    icon: <ChartNoAxesColumn />,
  },
  {
    id: 1,
    name: "Skill Test",
    icon: <BookOpen />,
  },
  {
    id: 2,
    name: "Internship",
    icon: <FileText />,
  },
];

const Sidebar = () => {
  const [active, setActive] = useState("Skill Test"); // State to toggle active class.
  const [isOpen, setIsOpen] = useState(false); // State to handle sidebar toggle.
  const sidebarRef = useRef(null); // Ref for sidebar

  const toggleSidebar = () => setIsOpen((state) => !state); 

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside); //Event listener to close sidebar when clicked anywhere outside.
    window.addEventListener("scroll", handleScroll); //Event listener to close sidebar when scrolled


    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);

    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Menu for Mobile */}
      <div
        className={`absolute z-20 p-5 transition-transform duration-300 ${
          isOpen ? "translate-x-44" : "translate-x-0"
        } lg:hidden`}
      >
        <button className="cursor-pointer text-black" onClick={toggleSidebar}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`min-h-screen transition-all bg-white duration-300 overflow-hidden ${
          isOpen ? "w-60" : "w-16"
        } lg:w-64 lg:block py-14 absolute lg:relative z-10`}
      >
        <div className="space-y-2">
          <ul className="space-y-2">
            {menuItems.map((menuItem) => {
              return (
                <li
                  className={`flex items-center space-x-5 px-5 cursor-pointer py-5 transition-all ease-in-out duration-300 w-[96%] ${
                    active === menuItem.name
                      ? " lg:bg-blue-50 text-blue-600 rounded-r-full"
                      : "text-gray-600 lg:hover:bg-gray-100 rounded-r-full"
                  }`}
                  key={menuItem.id}
                  onClick={() => setActive(menuItem.name)}
                >
                  <span>{menuItem.icon}</span>
                  <span
                    className={`${poppins.className} transition-all ease-in-out duration-300 whitespace-nowrap`}
                    style={{ minWidth: "100px" }} // Adjust minWidth as needed
                  >
                    {menuItem.name}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
