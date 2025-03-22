import React from "react";
import { Jumbotron } from "../../../components/Task/Jumbotron";

export const CompleteTask = () => {
  return (
    <div className="flex flex-col border w-full px-4 py-6">
      <Jumbotron text={"What Content We Completed ?"} />
    </div>
  );
};
