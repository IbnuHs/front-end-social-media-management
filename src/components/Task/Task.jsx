import React from "react";
import { MdEdit, MdEditOff } from "react-icons/md";

export const Task = () => {
  return (
    <>
      <tr className="odd:bg-white even:bg-gray-50 border-b  border-gray-200">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
          Easy Learn Javascript
        </th>
        <td className="px-6 py-4">Youtube</td>
        <td className="px-6 py-4">Rahulk</td>
        <td className="px-6 py-4">20/03/2025 17:00</td>
        <td className="px-6 py-4">19/03/2025 13:00</td>
        <td className="px-6 py-4 font-semibold text-xs ">
          <span className="bg-gray-400 text-white px-2 rounded-md py-1 ">
            Not Started
          </span>
        </td>
        <td className="px-6 py-4">
          <button
            type="button"
            className="hover:bg-gray-200 transition-all rounded p-1">
            <MdEdit className="text-blue-500 text-[18px] cursor-pointer" />
          </button>
        </td>
      </tr>
      <tr class="odd:bg-white even:bg-gray-50 border-b  border-gray-200">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
          How To Get Job Faster
        </th>
        <td className="px-6 py-4">LinkedIn</td>
        <td className="px-6 py-4">Yusman</td>
        <td className="px-6 py-4">18/03/2024 13:00</td>
        <td className="px-6 py-4">18/03/2024 08:00</td>
        <td className="px-6 py-4 font-semibold text-xs ">
          <span className="bg-gray-400 text-white px-2 rounded-md py-1 ">
            Not Started
          </span>
        </td>
        <td className="px-6 py-4">
          <button
            type="button"
            className="hover:bg-gray-200 transition-all rounded p-1">
            <MdEdit className="text-blue-500 text-[18px] cursor-pointer" />
          </button>
        </td>
      </tr>
      <tr className="odd:bg-white even:bg-gray-50 border-b  border-gray-200">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
          Ferrari Just Launched New Suv Sports Car
        </th>
        <td className="px-6 py-4">Instagram</td>
        <td className="px-6 py-4">Rahulk</td>
        <td className="px-6 py-4">21/03/2024 13:00</td>
        <td className="px-6 py-4">21/03/2024 08:00</td>
        <td className="px-6 py-4 font-semibold text-xs ">
          <span className="bg-green-500 text-white px-2 rounded-md py-1 ">
            On Process
          </span>
        </td>
        <td className="px-6 py-4">
          <button type="button" disabled className="transition-all rounded p-1">
            <MdEditOff className="text-blue-500 text-[18px]" />
          </button>
        </td>
      </tr>
      <tr className="odd:bg-white even:bg-gray-50 border-b  border-gray-200">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
          A.I Growth Faster
        </th>
        <td className="px-6 py-4">Facebook</td>
        <td className="px-6 py-4">Yusman</td>
        <td className="px-6 py-4">18/03/2024 13:00</td>
        <td className="px-6 py-4">18/03/2024 08:00</td>
        <td className="px-6 py-4 font-semibold text-xs ">
          <span className="bg-gray-400 text-white px-2 rounded-md py-1 ">
            Not Started
          </span>
        </td>
        <td className="px-6 py-4">
          <button
            type="button"
            className="hover:bg-gray-200 transition-all rounded p-1">
            <MdEdit className="text-blue-500 text-[18px] cursor-pointer" />
          </button>
        </td>
      </tr>
    </>
  );
};
