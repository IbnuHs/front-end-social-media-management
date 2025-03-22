import React from "react";
import { Modal } from "./Modal";
import { Welcoming } from "../../../components/Auth/Welcoming";

export const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen px-4">
      <div className="flex items-center shadow-custom rounded-md lg:h-[600px] to-purple-400 overflow-hidden">
        <Welcoming />
        <Modal />
      </div>
    </div>
  );
};
