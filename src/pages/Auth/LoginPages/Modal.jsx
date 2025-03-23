import React, { useState } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { ButtonAuth } from "../../../components/Auth/Button";

export const Modal = () => {
  const [show, setShow] = useState(false);
  const showPassword = () => {
    setShow(!show);
  };

  return (
    <form
      action=""
      className="flex justify-around w-full flex-col items-center lg:w-[450px] font-Inter bg-[#FDFCFA] gap-12">
      <div className="text-center w-full">
        <h1 className="text-lg lg:text-2xl font-bold">Welcome Back</h1>
        <p className="text-[14px] font-semibold">Login to your Account</p>
      </div>

      <div class="max-w-sm mx-auto w-full px-4 m-auto ">
        <div class="mb-5">
          <label
            htmlFor="email"
            class="block mb-2 text-sm font-medium text-gray-900">
            Email
          </label>
          <input
            type="email"
            id="email"
            class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0  block w-full p-2 px-3 "
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
          <div className="bg-gray-50  flex border  border-gray-300 rounded-lg pr-3">
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

        <div className="flex justify-center">
          <button
            type="submit"
            class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-8 py-2 text-center cursor-pointer">
            Login
          </button>
        </div>
        <div className="overflow-hidden text-center mt-6">
          <p className="text-[12px] font-semibold ">
            Dont Have Account?
            <a href="/auth/register" className="underline text-purple-600">
              register
            </a>
          </p>
        </div>
      </div>
    </form>
  );
};
