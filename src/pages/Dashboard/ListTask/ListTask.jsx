import React, { useState } from "react";
import { Pagination } from "../../../components/Main/Pagination";
import { Table } from "../../../components/Task/Table";
import { Jumbotron } from "../../../components/Task/Jumbotron";
import { EditModal } from "../../../components/Task/EditModal";
import { content } from "../../../data/data";
import { useTask } from "../../../hooks/useTask";
export const ListTask = () => {
  const text = "What Content Must We Make Today?";
  let header = [
    "Title Content",
    "Platform",
    "Author",
    "Deadline",
    "Time Upload",
    "Status",
    "Action",
  ];
  const { task } = useTask();
  const [editId, setEditId] = useState(null);
  const editModal = id => {
    setEditId(id);
  };
  const closeModalEdit = () => {
    setEditId(null);
  };

  return (
    <div className="flex flex-col w-full  px-2 py-2 gap-4 xl:px-8 xl:py-6">
      <Jumbotron text={text} />
      <Table
        header={header}
        data={task}
        showButton={true}
        editModal={editModal}
      />
      <Pagination />
      <EditModal
        isEdit={editId}
        setEditId={editModal}
        id={editId}
        closeModalEdit={closeModalEdit}
      />
    </div>
  );
};
