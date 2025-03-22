import React from "react";
import { Task } from "../../../components/Task/Task";
import { useLocation } from "react-router";

export const Table = () => {
  const location = useLocation();
  return (
    <>
      <div className="relative overflow-x-auto w-full rounded-lg shadow-md">
        <table className="w-full text-sm text-left rtl:text-right overflow-hidden shadow-2xl">
          <thead className="text-xs text-[#FAF5EF] uppercase bg-[#1C1C1C]">
            <tr>
              <th scope="col" className="px-6 py-5">
                Title Content
              </th>
              <th scope="col" className="px-6 py-5">
                Platform
              </th>
              <th scope="col" className="px-6 py-5">
                Author
              </th>
              <th scope="col" className="px-6 py-5">
                Deadline
              </th>
              <th scope="col" className="px-6 py-5">
                Time Upload
              </th>
              <th scope="col" className="px-6 py-5">
                Status
              </th>
              <th scope="col" className="px-6 py-5">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <Task />
          </tbody>
        </table>
      </div>
    </>
  );
};
