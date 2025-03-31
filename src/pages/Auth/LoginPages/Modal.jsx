import React, { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useAuth } from "../../../hooks/useAuth";

export const Modal = () => {
  const { login } = useAuth();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const showPassword = () => {
    setShow(!show);
  };
  const onSubmit = async e => {
    e.preventDefault();
    await login(email, password);
  };
  return (
    <form
      action=""
      onSubmit={onSubmit}
      className="flex justify-around w-full flex-col items-center lg:w-[450px] font-Inter bg-[#FDFCFA] gap-12">
      <div className="text-center w-full">
        <h1 className="text-lg lg:text-2xl font-bold">Welcome Back</h1>
        <p className="text-[14px] font-semibold">Login to your Account</p>
      </div>

      <div className="max-w-sm mx-auto w-full px-4 m-auto ">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900">
            Email
          </label>
          <input
            type="email"
            id="email"
            onChange={i => setEmail(i.target.value)}
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0  block w-full p-2 px-3 "
            placeholder="name@flowbite.com"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900">
            Password
          </label>
          <div className="bg-gray-50  flex border  border-gray-300 rounded-lg pr-3">
            <input
              type={show ? "text" : "password"}
              id="repeat-password"
              onChange={i => setPassword(i.target.value)}
              className="shadow-xs border-none focus:border-none bg-transparent focus:outline-none focus:ring-0  text-gray-900 text-sm  block w-full "
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
            className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-8 py-2 text-center cursor-pointer">
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
