import React from "react";
import { Jumbotron } from "../../../components/Task/Jumbotron";
import { Table } from "../../../components/Task/Table";
import { Pagination } from "../../../components/Main/Pagination";

export const CompleteTask = () => {
  let header = [
    "Title Content",
    "Platform",
    "Author",
    "Deadline",
    "Time Upload",
    "Status",
    "Link",
  ];
  const data = [
    {
      id: 1,
      title: "Easy Learn Javascript",
      platform: "Youtube",
      author: "Rahulk",
      deadline: "20/03/2025 17:00",
      timeUpload: "19/03/2025 13:00",
      status: "Not Started",
      link: "https://www.youtube.com/",
    },
    {
      id: 2,
      title: "How To Get Job Faster",
      platform: "LinkedIn",
      author: "Yusman",
      deadline: "18/03/2024 13:00",
      timeUpload: "18/03/2024 08:00",
      status: "Not Started",
      link: "https://www.linkedin.com/in/ibnu-hasyim-surianto-277b84241/",
    },
    {
      id: 3,
      title: "Ferrari Just Launched New Suv Sports Car",
      platform: "Instagram",
      author: "Rahulk",
      deadline: "21/03/2024 13:00",
      timeUpload: "21/03/2024 08:00",
      status: "On Process",
      link: "https://www.instagram.com/octoscript.id/",
    },
    {
      id: 4,
      title: "A.I Growth Faster",
      platform: "Facebook",
      author: "Yusman",
      deadline: "18/03/2024 13:00",
      timeUpload: "18/03/2024 08:00",
      status: "Not Started",
      link: "https://web.facebook.com/?locale=id_ID&_rdc=1&_rdr#",
    },
  ];

  return (
    <div className="flex flex-col w-full px-8 py-6 gap-4">
      <Jumbotron text={"What Content We Completed ?"} />
      <Table header={header} data={data} showButton={false} />
      <Pagination />
    </div>
  );
};
