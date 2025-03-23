import React, { useState, useRef, useEffect } from "react";
import { MdEdit, MdEditOff } from "react-icons/md";
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
          <tr
            key={index}
            className="odd:bg-white even:bg-gray-50 border-b  border-gray-200">
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
            <td className="px-6 py-4 relative flex items-center justify-center">
              {showButton ? (
                <>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === index ? null : index)
                    }
                    disabled={i.status !== "Not Started"}
                    className={`inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 ${
                      i.status !== "Not Started"
                        ? ""
                        : "hover:bg-gray-200 rounded cursor-pointer"
                    } `}
                    type="button">
                    {i.status !== "Not Started" ? (
                      <MdEditOff className="text-red-500 text-[18px]" />
                    ) : (
                      <MdEdit className="text-blue-500 text-[18px]" />
                    )}
                  </button>

                  {openDropdown === index && (
                    <div
                      ref={dropdownRef}
                      className="z-10 absolute top-12 left-0 right-0 m-auto bg-white shadow-sm py-2 gap-2 rounded-md font-Inter">
                      <ul className="text-sm text-gray-700 flex flex-col items-center justify-center">
                        <li className="w-full">
                          <button
                            onClick={() => editModal(i.id)}
                            type="button"
                            className="hover:bg-gray-100 cursor-pointer w-full text-center py-1 px-5 font-semibold text-gray-600 text-xs">
                            Edit
                          </button>
                        </li>
                        <li className="w-full">
                          <button
                            type="button"
                            className="hover:bg-gray-100 cursor-pointer w-full text-center py-1 px-4 font-semibold text-xs text-gray-600">
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
