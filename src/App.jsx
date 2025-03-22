import "./App.css";
import { Routes, Route } from "react-router";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Login } from "./pages/Auth/LoginPages/Login";
import { Register } from "./pages/Auth/RegisterPages/Register";
import "flowbite";

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<Login />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
