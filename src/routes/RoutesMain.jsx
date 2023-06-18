import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/Home.jsx";
import { LoginPage } from "../pages/Login/Login.jsx";
import { RegisterPage } from "../pages/Register/Register.jsx";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};
