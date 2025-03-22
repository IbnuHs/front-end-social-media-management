import React from "react";

export const Jumbotron = ({ text }) => {
  return (
    <div className="bg-[#1C1C1C] py-3 rounded-lg">
      <h1 className="text-center text-[#FDFCFA] font-bold text-2xl">{text}</h1>
    </div>
  );
};
