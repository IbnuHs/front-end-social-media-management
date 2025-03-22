import React from "react";
import { Welcoming } from "../../../components/Auth/Welcoming";
import { Modal } from "./Modal";

export const Register = () => {
  return (
    <div className="flex items-center justify-center h-screen px-4">
      <div className="flex items-center shadow-custom rounded-md lg:h-[600px] to-purple-400 overflow-hidden">
        <Modal />
        <Welcoming />
      </div>
    </div>
  );
};
