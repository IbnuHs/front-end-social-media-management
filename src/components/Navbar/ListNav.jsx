import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsListTask } from "react-icons/bs";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdChecklist } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router";
import { FiLogOut } from "react-icons/fi";

export const ListNav = () => {
  const [nav, setNav] = useState(false);
  const setNavbar = () => {
    setNav(!nav);
  };
  const navigate = useNavigate();
  const location = useLocation();
  const logout = () => {
    sessionStorage.removeItem("token");
    navigate("/auth/login");
  };
  return (
    <div className="flex -z-10 justify-start flex-col h-full lg:z-0">
      <button className="lg:hidden" type="button" onClick={setNavbar}>
        <GiHamburgerMenu className="text-white text-2xl" />
      </button>
      <ul
        className={`absolute left-0 right-0 flex flex-col justify-center  items-center ${
          nav ? "top-[-200px]" : "top-[55px] "
        }  bg-[1A1A1A] gap-3 py-5 transition-all lg:static lg:bg-transparent lg:items-start lg:w-full lg:gap-0 xl:gap-2`}>
        <li
          className="w-full flex flex-col gap-1
        ">
          <Link
            to="/dashboard/task"
            className={`${
              location.pathname === "/dashboard/task"
                ? "bg-white text-gray-500"
                : " text-white bg-transparent"
            } text-lg capitalize text-[14px] flex items-center gap-2 lg:font-semibold lg:w-full lg:px-4 lg:py-3 xl:text-[18px] xl:px-6  
             `}>
            <BsListTask
              className={`${
                location.pathname === "/dashboard/task"
                  ? "text-gray-500"
                  : "text-white "
              } font-semibold text-[24px]`}
            />
            My Task
          </Link>
        </li>
        <li className="w-full flex flex-col gap-1">
          <Link
            to="/dashboard/add"
            className={`text-lg capitalize text-[14px] flex items-center gap-2 lg:font-semibold lg:w-full lg:px-4 lg:py-3 xl:text-[18px] xl:px-6 ${
              location.pathname === "/dashboard/add"
                ? "bg-white text-gray-500"
                : " text-white bg-transparent"
            } 
             `}>
            <IoMdAddCircleOutline
              className={`${
                location.pathname === "/dashboard/add"
                  ? "text-gray-500"
                  : "text-white "
              } font-semibold text-[24px]`}
            />
            Add Task
          </Link>
        </li>
        <li
          className="w-full flex flex-col gap-1
        ">
          <Link
            to="/dashboard/complete"
            className={`text-lg capitalize text-[14px] flex items-center gap-2 lg:font-semibold lg:w-full lg:px-4 lg:py-3 xl:text-[18px] xl:px-6 ${
              location.pathname === "/dashboard/complete"
                ? "bg-white text-gray-500"
                : " text-white bg-transparent"
            } 
             `}>
            <MdChecklist
              className={`${
                location.pathname === "/dashboard/complete"
                  ? "text-gray-500"
                  : "text-white "
              } font-semibold text-[24px]`}
            />
            Complete Task
          </Link>
        </li>
      </ul>
      <div className="justify-self-end flex items-end justify-start h-full px-6">
        <button
          type="button"
          onClick={logout}
          className="font-semibold cursor-pointer border px-2 py-1 rounded-md bg-white text-gray-600 flex items-center gap-2">
          <FiLogOut /> Logout
        </button>
      </div>
    </div>
  );
};
