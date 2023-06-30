import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api.js";
import { toast } from "react-toastify";
export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("@TOKEN");
  const id = localStorage.getItem("@USERID");

  const authentication = { headers: { Authorization: `Bearer ${token}` } };

  const navigate = useNavigate();

  const currentPath = window.location.pathname;

  const submit = async (formData) => {
    try {
      const { data } = await api.post("/sessions", {
        email: formData.email,
        password: formData.password,
      });
      localStorage.setItem("@USERID", data.user.id);
      localStorage.setItem("@TOKEN", data.token);
      setUser(data.user);
      toast.success("Login realizado com sucesso");
      navigate("/home");
    } catch (error) {
      toast.error("E-mail ou senha incorretos");
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@USERID");
    localStorage.removeItem("@TOKEN");
    setUser(null);
    navigate("/");
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true);
        const { data } = await api.get("/profile", authentication);
        setUser(data);
        navigate(currentPath);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (token && id) {
      getUser();
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, userLogout, submit, loading }}>
      {children}
    </UserContext.Provider>
  );
};
