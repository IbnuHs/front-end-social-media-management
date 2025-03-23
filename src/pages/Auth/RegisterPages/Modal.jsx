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
      className="flex justify-center relative w-full gap-2 flex-col items-center lg:w-[450px] py-[40px] font-Inter h-full bg-[#FDFCFA] lg:gap-8">
      <div className="text-center w-full">
        <h1 className="text-lg lg:text-2xl font-bold">Welcome</h1>
        <p className="text-[14px] font-semibold">Create Your Account</p>
      </div>
      <div class="max-w-sm mx-auto w-full px-4 m-auto">
        <div class="mb-5">
          <label
            htmlFor="name"
            class="block mb-2 text-sm font-medium text-gray-900">
            Name
          </label>
          <input
            type="name"
            id="name"
            class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2 "
            placeholder="John Doe"
            required
          />
        </div>
        <div class="mb-5">
          <label
            htmlFor="email"
            class="block mb-2 text-sm font-medium text-gray-900">
            Email
          </label>
          <input
            type="email"
            id="email"
            class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2 "
            placeholder="name@flowbite.com"
            required
          />
        </div>

        <div class="mb-5">
          <label
            htmlFor="password"
            class="block mb-2 text-sm font-medium text-gray-900">
            Password
          </label>
          <div className="bg-gray-50  flex border  border-gray-300 focus:ring-gray-500 focus:border-gray-500 rounded-lg pr-3">
            <input
              type={show ? "text" : "password"}
              id="repeat-password"
              class="shadow-xs border-none focus:border-none bg-transparent focus:outline-none focus:ring-0  text-gray-900 text-sm  block w-full "
              required
            />
            <button
              type="button"
              className="cursor-pointer"
              onClick={showPassword}>
              {show ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          </div>
        </div>
        <div class="mb-5">
          <label
            htmlFor="repeat-password"
            class="block mb-2 text-sm font-medium text-gray-900">
            Repeat password
          </label>
          <div className="bg-gray-50  flex border  border-gray-300 focus:ring-gray-500 focus:border-gray-500 rounded-lg pr-3">
            <input
              type={showConf ? "text" : "password"}
              id="repeat-password"
              class="shadow-xs border-none focus:border-none bg-transparent focus:outline-none focus:ring-0  text-gray-900 text-sm  block w-full "
              required
            />
            <button
              type="button"
              className="cursor-pointer"
              onClick={showConfPassword}>
              {showConf ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 text-center cursor-pointer">
            Register
          </button>
        </div>
        <div className="overflow-hidden text-center mt-4">
          <p className="text-[12px] font-semibold">
            Already Have Account?
            <a href="/auth/login" className="underline text-purple-600">
              login
            </a>
          </p>
        </div>
      </div>
    </form>
  );
};
