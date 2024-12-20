import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate
import logo from "../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

function Navbar() {
  const [isClick, setIsClick] = useState(false);
  const [dropdowns, setDropdowns] = useState({});
  const dropdownRef = useRef({});
  const navigate = useNavigate(); // Initialize navigate

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  const toggleDropdown = (index) => {
    setDropdowns((prevDropdowns) => ({
      ...prevDropdowns,
      [index]: !prevDropdowns[index],
    }));
  };

  const handleItemClick = (index) => {
    setDropdowns((prevDropdowns) => ({
      ...prevDropdowns,
      [index]: false,
    }));
  };

  const handleProfileClick = () => {
    navigate("/user-profile-layout"); // Navigate to the UserProfileLayout route
  };

  const menuItems = [
    { name: "Home", link: "/", dropdown: false },
    // {
    //   name: "Course",
    //   link: "/courses",
    //   dropdown: true,
    //   subItems: ["Web Development", "Data Science"],
    // },
    // {
    //   name: "Tutorial",
    //   link: "/tutorials",
    //   dropdown: true,
    //   subItems: ["React", "Node.js"],
    // },
    // {
    //   name: "Challenge",
    //   link: "/challenges",
    //   dropdown: true,
    //   subItems: ["Coding Challenge", "UI/UX Challenge"],
    // },
    // {
    //   name: "Playground",
    //   link: "/playground",
    //   dropdown: true,
    //   subItems: ["Frontend", "Backend"],
    // },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdowns({});
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <nav className="bg-[#14192D]">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <NavLink to="/" className="text-white text-xl font-bold">
                  <img src={logo} alt="Logo" className="w-[5rem] h-[5rem]" />
                </NavLink>
              </div>
            </div>

            <div className="hidden md:flex uppercase">
              <div className="ml-4 flex items-center space-x-4">
                {menuItems.map((item, index) => (
                  <div key={index} className="relative">
                    <NavLink
                      to={item.link}
                      className="text-white rounded-md flex items-center"
                      onClick={() => item.dropdown && toggleDropdown(index)}
                    >
                      {item.name}
                      {item.dropdown && <IoMdArrowDropdown className="ml-1" />}
                    </NavLink>

                    {item.dropdown && dropdowns[index] && (
                      <div className="absolute left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-10">
                        {item.subItems.map((subItem, subIndex) => (
                          <NavLink
                            key={subIndex}
                            to={`/${subItem
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                            onClick={() => handleItemClick(index)}
                          >
                            {subItem}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="flex items-center text-white">
                  <div className="border-l border-white h-7 mx-2" />
                  <FaUser
                    size={25}
                    color="white"
                    className="mx-3 cursor-pointer"
                    onClick={handleProfileClick} // Add click handler
                  />
                  <div>
                    <p className="m-0">Welcome</p>
                    <div className="flex space-x-2">
                      <a
                        href="/login"
                        className="text-white hover:underline cursor-pointer"
                      >
                        Login
                      </a>
                      <span>/</span>
                      <a
                        href="/signup"
                        className="text-white hover:underline cursor-pointer"
                      >
                        Signup
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <IoClose size={26} color="white" />
                ) : (
                  <RxHamburgerMenu size={26} color="white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
