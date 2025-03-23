import React, { useState, useRef, useEffect } from "react";
import { MdEdit } from "react-icons/md";
import { FaLink } from "react-icons/fa";

export const Task = ({ data, showButton, editModal }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <>
      {data.map((i, index) => {
        // console.log(i);
        return (
          <tr className="odd:bg-white even:bg-gray-50 border-b  border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
              {i.title}
            </th>
            <td className="px-6 py-4">{i.platform}</td>
            <td className="px-6 py-4">{i.author}</td>
            <td className="px-6 py-4">{i.deadline}</td>
            <td className="px-6 py-4">{i.timeUpload}</td>
            <td className="px-6 py-4 font-semibold text-xs ">
              <span
                className={` text-white px-2 rounded-md py-1 ${
                  i.status === "On Process" ? "bg-green-500" : "bg-gray-400"
                }`}>
                {i.status}
              </span>
            </td>
            <td className="px-6 py-4 relative">
              {showButton ? (
                <>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === index ? null : index)
                    }
                    className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg "
                    type="button">
                    <MdEdit className="text-blue-500 text-[18px] cursor-pointer" />
                  </button>

                  {openDropdown === index && (
                    <div
                      ref={dropdownRef}
                      className="z-10 absolute top-1 right-0 bg-white shadow-sm">
                      <ul className="text-sm text-gray-700 flex flex-col items-center justify-center">
                        <li className="w-full">
                          <button
                            onClick={() => editModal(i.id)}
                            type="button"
                            className="hover:bg-gray-100 cursor-pointer w-full text-center py-1">
                            Edit
                          </button>
                        </li>
                        <li className="w-full">
                          <button
                            type="button"
                            className="hover:bg-gray-100 cursor-pointer w-full text-center py-1 px-1">
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </>
              ) : (
                <a href={i.link} target="_blank">
                  <FaLink className="text-blue-500" />
                </a>
              )}
            </td>
          </tr>
        );
      })}
    </>
  );
};
