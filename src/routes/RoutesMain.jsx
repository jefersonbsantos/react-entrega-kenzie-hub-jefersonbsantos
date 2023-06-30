import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/Home.jsx";
import { LoginPage } from "../pages/Login/Login.jsx";
import { RegisterPage } from "../pages/Register/Register.jsx";
import { ProtectedRoutes } from "../ProtectedRoutes/ProtectedRoutes.jsx";
import { PublicRoutes } from "../PublicRoutes/PublicRoutes.jsx";
import { TechsProvider } from "../providers/techsContext.jsx";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route element={<ProtectedRoutes />}>
        <Route
          path="/home"
          element={
            <TechsProvider>
              <HomePage />
            </TechsProvider>
          }
        />
      </Route>
    </Routes>
  );
};
