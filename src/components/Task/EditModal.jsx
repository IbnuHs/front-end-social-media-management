import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useTask } from "../../hooks/useTask";

export const EditModal = ({ isEdit, closeModalEdit, id }) => {
  const [title, setTitle] = useState(null);
  const [platforms, setplatform] = useState(null);
  const [author, setauthor] = useState(null);
  const { editTask, allAuthors, platform } = useTask();
  // console.log(allAuthors);
  const onSubmit = e => {
    e.preventDefault();
    console.log(id, title, platforms, author);
    editTask(id, title, platforms, author);
    closeModalEdit();
  };
  return (
    <div
      className={`${
        isEdit ? "flex" : "hidden"
      } absolute left-0 right-0 top-0 bottom-0  items-center justify-center border-8 z-20 backdrop-blur-xs`}>
      <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full ">
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-[#1C1C1C] rounded-lg shadow-sm ">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
              <h3 className="text-lg font-semibold text-white">Edit Task</h3>
              <button
                type="button"
                onClick={closeModalEdit}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-600 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center cursor-pointer">
                <IoClose className="text-[24px] " />
              </button>
            </div>

            <form className="p-4 md:p-5" onSubmit={onSubmit}>
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-white">
                    Title Content
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    onChange={i => setTitle(i.target.value)}
                    className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Input Title Content"
                    required
                  />
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="platform"
                    className="block mb-2 text-sm font-medium text-white ">
                    Platform
                  </label>
                  <select
                    id="platform"
                    required
                    onChange={i => setplatform(i.target.value)}
                    className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    <option defaultValue={""}>Select Platform</option>
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
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="author"
                    className="block mb-2 text-sm font-medium text-white ">
                    Author
                  </label>
                  <select
                    id="author"
                    required
                    onChange={i => setauthor(i.target.value)}
                    className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    <option defaultValue={""}>Select Author</option>
                    {allAuthors &&
                      allAuthors.map((i, index) => {
                        return (
                          <option key={index} value={i.id}>
                            {i.name}
                          </option>
                        );
                      })}
                  </select>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="text-white inline-flex items-center bg-gray-700 cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
