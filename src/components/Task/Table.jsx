import React from "react";
import { Task } from "./Task";

export const Table = ({ header, data, showButton, editModal }) => {
  return (
    <>
      <div className="relative w-full shadow-md">
        <table className="w-full text-sm text-left rtl:text-right overflow-x-hidden shadow-2xl rounded-2xl">
          <thead className="text-xs text-[#FAF5EF] uppercase bg-[#1C1C1C] rounded-lg">
            <tr>
              {header.map((i, index) => {
                return (
                  <th key={index} scope="col" className="px-6 py-5">
                    {i}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            <Task data={data} showButton={showButton} editModal={editModal} />
          </tbody>
        </table>
      </div>
    </>
  );
};
