import React from "react";
import { TbLockPassword } from "react-icons/tb";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useState } from "react";

export const InputPassword = () => {
  const [show, setShow] = useState(false);
  const showPassword = () => {
    setShow(!show);
  };
  return (
    <div className="flex flex-col w-full">
      <label htmlFor="password">Password</label>
      <div className="flex items-center border justify-between px-2 py-1 rounded-sm bg-purple-200">
        <TbLockPassword className="text-purple-600" />
        <input
          type={show ? "text" : "password"}
          className="focus:outline-none px-2 text-purple-600 w-full"
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
  );
};
