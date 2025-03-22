import React from "react";
import { Profile } from "./Profile";
import { ListNav } from "./ListNav";

export const Navbar = () => {
  return (
    <div className="flex justify-between bg-[#1A1A1A] py-2 z-20 relative px-2 lg:flex-col lg:w-[20%] lg:gap-5 lg:px-0 lg:h-screen lg:justify-normal lg:py-5">
      <Profile />
      <ListNav />
    </div>
  );
};
