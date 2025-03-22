import React, { useState } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { ButtonAuth } from "../../../components/Auth/Button";
import { IoMdPerson } from "react-icons/io";

export const Modal = () => {
  const [show, setShow] = useState(false);
  const [showConf, setShowConf] = useState(false);
  const showPassword = () => {
    setShow(!show);
  };
  const showConfPassword = () => {
    setShowConf(!showConf);
  };
  return (
    <form
      action=""
      className="flex justify-center relative w-full gap-2 flex-col items-center lg:w-[450px] py-[60px]  font-Inter h-full bg-[#FDFCFA] lg:gap-8">
      <div className="text-center w-full">
        <h1 className="text-lg lg:text-2xl font-bold">Welcome</h1>
        <p className="text-[14px] font-semibold">Create Your Account</p>
      </div>
      <div className="flex justify-center relative flex-col items-center w-full px-5 lg:px-12  gap-4">
        <div className="flex flex-col w-full">
          <label htmlFor="name" className="text-[14px] lg:text-[16px]">
            Name
          </label>
          <div className="flex items-center border px-2 py-1 text-[14px] rounded-sm bg-purple-200 lg:text-[16px]">
            <IoMdPerson className="text-purple-600" />
            <input
              type="text"
              className="focus:outline-none px-2 w-full text-purple-600"
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="email" className="text-[14px] lg:text-[16px]">
            email
          </label>
          <div className="flex items-center border px-2 py-1 rounded-sm bg-purple-200">
            <MdAlternateEmail className="text-purple-600" />
            <input
              type="text"
              className="text-[14px] focus:outline-none px-2 w-full text-purple-600"
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="password" className="text-[14px] lg:text-[16px]">
            Password
          </label>
          <div className="flex items-center border justify-between px-2 py-1 rounded-sm bg-purple-200">
            <TbLockPassword className="text-purple-600" />
            <input
              type={show ? "text" : "password"}
              className="text-[14px] focus:outline-none w-full px-2 text-purple-600"
            />
            <button type="button" onClick={showPassword}>
              {show ? (
                <FaRegEye className="text-purple-600" />
              ) : (
                <FaRegEyeSlash className="text-purple-600" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label
            htmlFor="confirmPassword"
            className="text-[14px] lg:text-[16px]">
            Confirm Password
          </label>
          <div className="flex items-center border justify-between px-2 py-1 rounded-sm bg-purple-200">
            <TbLockPassword className="text-purple-600" />
            <input
              type={showConf ? "text" : "password"}
              className="text-[14px] focus:outline-none w-full px-2 text-purple-600"
            />
            <button type="button" onClick={showConfPassword}>
              {showConf ? (
                <FaRegEye className="text-purple-600" />
              ) : (
                <FaRegEyeSlash className="text-purple-600" />
              )}
            </button>
          </div>
        </div>
        <ButtonAuth />
      </div>
      <div className="overflow-hidden mt-4">
        <p className="text-[12px] font-semibold">
          Already Have Account?
          <a href="" className="underline text-purple-600">
            login
          </a>
        </p>
      </div>
    </form>
  );
};
