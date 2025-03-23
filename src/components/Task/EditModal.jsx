import React from "react";
import { IoClose } from "react-icons/io5";

export const EditModal = ({ isEdit, closeModalEdit }) => {
  return (
    <div
      className={`${
        isEdit ? "flex" : "hidden"
      } absolute left-0 right-0 top-0 bottom-0  items-center justify-center border-8 z-20 backdrop-blur-xs`}>
      <div
        id="crud-modal"
        tabindex="-1"
        aria-hidden="true"
        class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full ">
        <div class="relative p-4 w-full max-w-md max-h-full">
          <div class="relative bg-[#1C1C1C] rounded-lg shadow-sm ">
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
              <h3 class="text-lg font-semibold text-white">
                Create New Product
              </h3>
              <button
                type="button"
                onClick={closeModalEdit}
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-600 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center cursor-pointer"
                data-modal-toggle="crud-modal">
                <IoClose className="text-[24px] " />
              </button>
            </div>

            <form class="p-4 md:p-5">
              <div class="grid gap-4 mb-4 grid-cols-2">
                <div class="col-span-2">
                  <label
                    for="title"
                    class="block mb-2 text-sm font-medium text-white">
                    Title Content
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    class="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Input Title Content"
                    required=""
                  />
                </div>
                <div class="col-span-2 sm:col-span-1">
                  <label
                    for="price"
                    class="block mb-2 text-sm font-medium text-white ">
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    class="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="$2999"
                    required=""
                  />
                </div>
                <div class="col-span-2 sm:col-span-1">
                  <label
                    for="category"
                    class="block mb-2 text-sm font-medium text-white ">
                    Category
                  </label>
                  <select
                    id="category"
                    class="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    <option selected="">Select category</option>
                    <option value="TV">TV/Monitors</option>
                    <option value="PC">PC</option>
                    <option value="GA">Gaming/Console</option>
                    <option value="PH">Phones</option>
                  </select>
                </div>
                <div class="col-span-2">
                  <label
                    for="description"
                    class="block mb-2 text-sm font-medium text-white ">
                    Product Description
                  </label>
                  <textarea
                    id="description"
                    rows="4"
                    class="block p-2.5 w-full text-sm text-white bg-gray-500 rounded-lg border border-gray-300 "
                    placeholder="Write product description here"></textarea>
                </div>
              </div>
              <button
                type="submit"
                class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                <svg
                  class="me-1 -ms-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clip-rule="evenodd"></path>
                </svg>
                Add new product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
