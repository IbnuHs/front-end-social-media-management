import React from "react";
import welcoming from "../../assets/welcoming.png";

export const Welcoming = () => {
  return (
    <div className="hidden lg:flex flex-col h-full bg-linear-to-r from-[#7B6CEB] to-[#8d80f2] items-center self-center px-4 w-[500px] justify-center box-content">
      <img src={welcoming} alt="" className="w-[350px]" />
      <div className="text-center text-white flex flex-col gap-2 mt-5 mb-16">
        <p className="capitalize text-[16px] font-semibold px-8 font-Lato">
          Make your time more efficient by uploading content according to a
          predetermined schedule
        </p>
      </div>
    </div>
  );
};
