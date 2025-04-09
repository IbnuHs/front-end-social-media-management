import { useEffect, useState } from "react";
import { api } from "../utils/api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

export const useTask = () => {
  const [platform, setPlatform] = useState(null);
  const [allAuthors, setAuthors] = useState(null);
  const [task, setTask] = useState([]);
  const [user, setUser] = useState(null);
  const [completeTask, setCompleteTask] = useState(null);
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  const getUser = () => {
    if (!token) {
      Swal.fire({
        title: "Invalid Session, ",
        text: "Plese Login Again",
        icon: "error",
        didClose: () => {
          navigate("/auth/login");
        },
      });
    }
    setUser(token);
  };
  const getPlatform = async () => {
    try {
      const res = await api.get("/platform");
      //   console.log(res.data.data);
      setPlatform(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getAuthors = async () => {
    try {
      const res = await api.get("/user/authors");
      setAuthors(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const addTask = async (platform, titleContent, dueOn, authors) => {
    Swal.fire({
      title: "Loading...",
      didOpen: () => {
        Swal.showLoading();
      },
      allowOutsideClick: false,
    });
    try {
      const res = await api.post(
        "/todo/create",
        {
          platform,
          titleContent,
          dueOn,
          authors,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      Swal.close();
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Success Add Task",
      });
    } catch (error) {
      Swal.close();
      //   console.log(error.response.data.message);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response.data.message,
      });
    }
  };
  const getTask = async () => {
    Swal.fire({
      title: "Loading...",
      didOpen: () => {
        Swal.showLoading();
      },
      allowOutsideClick: false,
    });
    try {
      const res = await api.get("/todo", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      Swal.close();
      setTask(res.data.data);
    } catch (error) {
      Swal.close();
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response.data.message,
      });
    }
  };

  const getCompleteTask = async () => {
    try {
      const res = await api.get("/todo/complete");
      setCompleteTask(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const editTask = async (id, title, platform, author) => {
    Swal.fire({
      title: "Loading...",
      didOpen: () => {
        Swal.showLoading();
      },
      allowOutsideClick: false,
    });
    try {
      const res = await api.patch(
        `/todo/${id}`,
        {
          platform: platform,
          titleContent: title,
          author: author,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      Swal.close();
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Task updated successfully",
      });
      getTask();
    } catch (error) {
      Swal.close();
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response.data.message,
      });
      console.log(error);
    }
  };

  const deleteTask = async id => {
    Swal.fire({
      icon: "question",
      title: "Are You Sure?",
      text: "Are You sure Want To delete This Task?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async result => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Loading...",
          didOpen: () => {
            Swal.showLoading();
          },
          allowOutsideClick: false,
        });
        try {
          const res = await api.delete(`/todo/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          console.log(res);
          Swal.close();
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Task deleted successfully",
          });
        } catch (error) {
          console.log(error);
          Swal.close();
          Swal.fire({
            icon: "error",
            title: "Error",
            text: error.response.data.message,
          });
        }
      }
    });
  };

  useEffect(() => {
    getPlatform();
    getAuthors();
    getUser();
    getTask();
    getCompleteTask();
  }, []);

  return {
    addTask,
    platform,
    allAuthors,
    user,
    task,
    completeTask,
    editTask,
    deleteTask,
  };
};
