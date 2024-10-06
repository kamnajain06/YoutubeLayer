import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-hot-toast";
import logo from "../images/logo.png";
import { MdAccountCircle } from "react-icons/md";
import { PopUp } from "./PopUp";
import { useLocation, matchPath } from "react-router-dom"

export const Navbar = (props) => {

  let isLoggedIn = props.isLoggedIn;
  let setISLoggedIn = props.setISLoggedIn;
  const image = localStorage.getItem("image");
  const savedAccount = localStorage.getItem("accountType");
  let YouTuber = false;
  let editor = false;
  savedAccount === "YouTuber" ? (YouTuber = true) : (editor = true);

  const [isPopUpShow, setIsPopUpShow] = useState(false);
  const location = useLocation();


  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  }

  return (
    <div className=" overflow-hidden bg-black fixed right-0 left-0 top-0 z-40 pt-4 border-b border-[#131625]">
      <div className="flex  justify-between items-center w-11/12 max-w-[1160px] mx-auto ">
        <div className="  ">
          <NavLink to="/">
            <img className="h-14 w-40 " src={logo} alt="logo" loading="lazy" />
          </NavLink>
        </div>
        <div>
          <div className="flex ">
            <ul className="flex gap-6 flex-row  mx-[10px] text-md">
              <li>
                <NavLink
                  to="/"
                  className={`${matchRoute('/') ?  "bg-white text-black " : "text-white "} p-[4px] px-[10px] rounded-[8px] hover:cursor-pointer hover:bg-white hover:text-black transition-all duration-100`}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={`${matchRoute('/about') ?  "bg-white text-black " : "text-white "} p-[4px] px-[10px] rounded-[8px] hover:cursor-pointer hover:bg-white hover:text-black transition-all duration-100`}
                >
                  About
                </NavLink>
              </li>
            </ul>
            {!isLoggedIn && (
              <NavLink to="/login">
                <button className={`${matchRoute('/login') ? "bg-white text-black " : "text-white "} px-[10px] rounded-[8px] hover:cursor-pointer hover:bg-white hover:text-black transition-all duration-100`}>
                  Login
                </button>
              </NavLink>
            )}
            {isLoggedIn && YouTuber && (
              <NavLink to="/dashboard">
                <button className={`${matchRoute('/dashboard') ? "bg-white text-black " : "text-white "}  px-[10px] rounded-[8px] hover:cursor-pointer hover:bg-white hover:text-black transition-all duration-100`}>
                  Dashboard
                </button>
              </NavLink>
            )}
            {isLoggedIn && editor && (
              <NavLink to="/editorDashboard">
                <button className={`${matchRoute('/editorDashboard') ? "bg-white text-black " : "text-white "}  px-[10px] rounded-[8px] hover:cursor-pointer hover:bg-white hover:text-black transition-all duration-100`}>
                  Editor Dashboard
                </button>
              </NavLink>
            )}
            {isLoggedIn && (
              <NavLink to="/">
                <button
                  onClick={() => {
                    setISLoggedIn(false);
                    toast.success("Logged Out");
                    localStorage.removeItem("accountType");
                    localStorage.removeItem("token");
                    localStorage.removeItem("image");
                    localStorage.removeItem("category");
                    localStorage.removeItem("dashPage");
                    localStorage.removeItem("edPage");
                    localStorage.removeItem("email");
                  }}
                  className="text-white px-[12px] focus:bg-white focus:text-black rounded-[8px] mx-[10px] cursor-pointer hover:bg-white hover:text-black transition-all duration-100"
                >
                  Log out
                </button>
              </NavLink>
            )}
            {isLoggedIn && (
              <button
                onClick={() => {
                  setIsPopUpShow(true);
                  console.log("hello");
                }}
              >
                <img className="w-8 rounded-[50%]" src={image} alt="Profile" />
              </button>
            )}
            {isPopUpShow && <PopUp onClose={() => setIsPopUpShow(false)} />}
          </div>
        </div>
      </div>
    </div>
  );
};
