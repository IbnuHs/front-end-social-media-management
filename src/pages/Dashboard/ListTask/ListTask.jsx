import React from "react";
import { Pagination } from "../../../components/Main/Pagination";
import { Table } from "./Table";
import { Jumbotron } from "../../../components/Task/Jumbotron";

export const ListTask = () => {
  const text = "What Content Must We Make Today?";
  return (
    <div className="flex flex-col w-full  px-2 py-2 gap-4 xl:px-8 xl:py-6 border">
      <Jumbotron text={text} />
      <Table />
      <Pagination />
    </div>
  );
};
