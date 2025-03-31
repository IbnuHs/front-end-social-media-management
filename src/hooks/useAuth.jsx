import { useState } from "react";
import { api } from "../utils/api";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

export const useAuth = () => {
  // const [user, setUser ] = useState()
  const navigate = useNavigate();

  const Toaster = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
  });

  //   const loadingToaster =
  const register = async (name, email, password) => {
    Swal.fire({
      title: "Loading...",
      didOpen: () => {
        Swal.showLoading();
      },
      allowOutsideClick: false,
    });
    try {
      const res = await api.post("/auth/register", {
        name: name,
        email: email,
        password: password,
      });
      Toaster.fire({
        icon: "success",
        title: "Success Create Account",
        didClose: () => {
          Swal.close();
          navigate("/auth/login");
        },
      });
      console.log(res);
    } catch (e) {
      Swal.close();
      Swal.fire({
        icon: "error",
        text: e.response.data.message,
      });
      console.log(e);
    }
  };

  const login = async (email, password) => {
    Swal.fire({
      title: "Loading...",
      didOpen: () => {
        Swal.showLoading();
      },
      allowOutsideClick: false,
    });
    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });
      //   console.log(res.data.token);
      const token = res.data.token;
      sessionStorage.setItem("token", token);
      Toaster.fire({
        icon: "success",
        text: "Login Success",
        didClose: () => {
          Swal.close();
          navigate("/dashboard/task");
        },
      });
      //   console.log(res);
    } catch (e) {
      console.log(e);
      Swal.close();
      Swal.fire({
        icon: "error",
        title: "Error",
        text: e.response.data.message,
      });
    }
  };

  return { register, login };
};
