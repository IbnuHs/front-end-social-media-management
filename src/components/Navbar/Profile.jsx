import React from "react";
import person from "../../assets/person.jpg";

export const Profile = () => {
  return (
    <div className="">
      <div className="flex text-white items-center gap-4 font-semibold px-2 lg:px-5 xl:border-b-2 lg:pb-5">
        <img
          src={person}
          alt=""
          className="aspect-square max-w-10 rounded-full border"
        />
        <div className="">
          <h1 className="text-xl">John Doe</h1>
        </div>
      </div>
      {/* <hr className="h-[3px] px-2 bg-white" /> */}
    </div>
  );
};
