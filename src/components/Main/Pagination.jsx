import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export const Pagination = () => {
  return (
    <>
      <nav>
        <ul className="flex items-center -space-x-px h-10 text-base m-auto justify-center">
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400  ">
              <span className="sr-only">Previous</span>
              <IoIosArrowBack />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400  ">
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400  ">
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              //   aria-current="page"
              className="z-10 flex items-center justify-center px-4 h-10 leading-tight text-[#141414] bg-[#bcbcbc] hover:text-white hover:bg-[#717171]">
              3
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400  ">
              <span className="sr-only">Next</span>
              <IoIosArrowForward />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
