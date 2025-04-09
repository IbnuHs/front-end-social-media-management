import React, { useRef, useState } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { useTask } from "../../../hooks/useTask";

export const AddTask = () => {
  const dateRef = useRef(null);
  const timeRef = useRef(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [title, setTitle] = useState(null);
  const [platforms, setPlatform] = useState(null);
  const [authors, setAuthor] = useState(null);
  const { platform, allAuthors, addTask } = useTask();

  const dateClick = () => {
    dateRef.current.click();
  };
  const onSubmit = e => {
    e.preventDefault();
    // console.log(title);
    if (platforms === null || authors === null) {
      alert("Please Select Platform and Authors");
      return;
    }
    const dueOn = date + " " + time;
    addTask(platforms, title, dueOn, authors);
    // console.log(dueOn);
  };
  return (
    <div className="w-full flex items-center">
      <form
        action=""
        onSubmit={onSubmit}
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
            onChange={i => setTitle(i.target.value)}
            required
            placeholder="Input Content Title"
            className="bg-gray-50 border font-Poppins capitalize border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5  "
          />
        </div>
        <div className="mb-5 ">
          <label
            htmlFor="platform"
            className="block mb-2 text-  text-gray-600 font-semibold">
            Platform
          </label>
          <select
            id="platform"
            onChange={i => setPlatform(i.target.value)}
            required
            className="bg-gray-50 border border-gray-300 text-sm text-gray-500 rounded-lg font-semibold focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5  ">
            <option defaultValue={""} className="">
              Select Platform
            </option>
            {platform &&
              platform.map((i, index) => {
                return (
                  <option key={index} value={i.id}>
                    {i.platform}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="mb-5 ">
          <label
            htmlFor="countries"
            className="block mb-2 text-  text-gray-600 font-semibold">
            Author
          </label>
          <select
            id="countries"
            required
            onChange={i => setAuthor(i.target.value)}
            className="bg-gray-50 border border-gray-300 text-sm text-gray-500 rounded-lg font-semibold focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5  ">
            <option defaultValue={""} className="">
              Select Author
            </option>
            {allAuthors &&
              allAuthors.map((i, index) => {
                // console.log(i.id);
                return (
                  <option key={index} value={i.id}>
                    {i.name}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="mb-5">
          <label
            htmlFor="base-input"
            className="block mb-2 text-  text-gray-600 font-semibold">
            Deadline
          </label>
          <div className="flex justify-between gap-4">
            <div className="relative w-full" onClick={dateClick}>
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <MdOutlineDateRange className="text-[24px]" />
              </div>
              <input
                type="date"
                required
                ref={dateRef}
                onChange={i => setDate(i.target.value)}
                className="rounded-md pl-10 active:outline-none focus:outline-none w-full text-center"
              />
            </div>
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <FaRegClock className="text-[24px]" />
              </div>
              <input
                type="time"
                required
                ref={timeRef}
                onChange={i => setTime(i.target.value)}
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
