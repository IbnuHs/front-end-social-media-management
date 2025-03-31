import React, { useEffect } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Routes, Route, useNavigate } from "react-router";
import { ListTask } from "./ListTask/ListTask";
import { AddTask } from "./AddTask/AddTask";
import { CompleteTask } from "./CompleteTask/CompleteTask";

export const Dashboard = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  useEffect(() => {
    if (!token) navigate("/auth/login");
  }, [token]);
  return (
    <div className="lg:flex bg-[#FDFCFA] h-screen">
      <Navbar />
      <Routes>
        <Route path="task" element={<ListTask />} />
        <Route path="add" element={<AddTask />} />
        <Route path="complete" element={<CompleteTask />} />
      </Routes>
    </div>
  );
};
