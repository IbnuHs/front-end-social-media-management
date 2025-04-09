import React from "react";
import { Jumbotron } from "../../../components/Task/Jumbotron";
import { Table } from "../../../components/Task/Table";
import { Pagination } from "../../../components/Main/Pagination";
import { useTask } from "../../../hooks/useTask";

export const CompleteTask = () => {
  const { completeTask } = useTask();
  let header = [
    "Title Content",
    "Platform",
    "Author",
    "Deadline",
    "Time Upload",
    "Status",
    "Link",
  ];

  return (
    <div className="flex flex-col w-full px-8 py-6 gap-4">
      <Jumbotron text={"What Content We Completed ?"} />
      <Table header={header} data={completeTask} showButton={false} />
      <Pagination />
    </div>
  );
};
