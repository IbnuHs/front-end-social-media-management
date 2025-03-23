import React, { useRef } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";

export const AddTask = () => {
  const dateRef = useRef(null);
  const timeRef = useRef(null);

  const dateClick = () => {
    dateRef.current.click();
  };
  const timeClick = () => {
    timeRef.current.click();
  };
  return (
    <div className="w-full flex items-center">
      <form
        action=""
        className="m-auto w-[60%] border-2 px-14 py-12 rounded-md border-gray-500 shadow-md relative font-Lato text-gray-500 bg-white">
        <div className="mb-5">
          <label
            htmlFor="base-input"
            className="block mb-2 text-  text-gray-600 font-semibold">
            Title
          </label>
          <input
            type="text"
            id="base-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5  "
          />
        </div>
        <div class="mb-5 ">
          <label
            htmlFor="countries"
            className="block mb-2 text-  text-gray-600 font-semibold">
            Platform
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-sm text-gray-500 rounded-lg font-semibold focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5  ">
            <option defaultValue={"Platform"} className="">
              Select Platform
            </option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div class="mb-5 ">
          <label
            htmlFor="countries"
            className="block mb-2 text-  text-gray-600 font-semibold">
            Author
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-sm text-gray-500 rounded-lg font-semibold focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5  ">
            <option defaultValue={"Author"} className="">
              Select Author
            </option>
            <option value="US">Rahul</option>
            <option value="CA">Yusman</option>
            <option value="FR">Ade Gustiyono</option>
          </select>
        </div>
        <div className="mb-5">
          <label
            htmlFor="base-input"
            className="block mb-2 text-  text-gray-600 font-semibold">
            Deadline
          </label>
          <div className="flex justify-between gap-4">
            <div class="relative w-full" onClick={dateClick}>
              <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <MdOutlineDateRange className="text-[24px]" />
              </div>
              <input
                type="date"
                ref={dateRef}
                className="rounded-md pl-10 active:outline-none focus:outline-none w-full text-center"
              />
            </div>
            <div class="relative w-full">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <FaRegClock className="text-[24px]" />
              </div>
              <input
                type="time"
                ref={timeRef}
                className="rounded-md pl-10 active:outline-none focus:outline-none w-full text-center"
              />
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <button
              type="submit"
              className="px-8 py-1 border rounded-md font-semibold bg-gray-500 text-white cursor-pointer">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
