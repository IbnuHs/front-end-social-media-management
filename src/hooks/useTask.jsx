import { useState } from "react";
import { api } from "../utils/api";

export const useTask = () => {
  const getCategory = async () => {
    try {
      const res = api.get("/platform");
      console.log(res);
    } catch (error) {}
  };

  const addTask = (platform, titleContent, dueOn, userId) => {
    try {
      const res = api.post("/todo/create", {
        platform,
        titleContent,
        dueOn,
        userId,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return { addTask, getCategory };
};
