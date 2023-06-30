import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const TechsContext = createContext({});

export const TechsProvider = ({ children }) => {
  const [techsList, setTechsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const userId = localStorage.getItem("@USERID");
  const token = localStorage.getItem("@TOKEN");

  const authentication = { headers: { Authorization: `Bearer ${token}` } };

  useEffect(() => {
    const loadTechs = async () => {
      try {
        setLoading(true);
        const { data } = await api.get(`/users/${userId}`);
        setTechsList(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    loadTechs();
  }, []);

  const createTechs = async (formData) => {
    try {
      await api.post(
        "/users/techs",
        {
          title: formData.title,
          status: formData.status,
        },
        authentication
      );
      await api.get(`/users/${userId}`).then(({ data }) => {
        setTechsList(data);
      });
    } catch (error) {
    } finally {
      setIsAdding(false);
    }
  };

  const updateTechs = async (formData) => {
    const techId = techsList.techs.id;
    try {
      await api.put(
        `/users/techs/${techId}`,
        {
          status: formData.status,
        },
        authentication
      );
    } catch (error) {}
  };

  return (
    <TechsContext.Provider
      value={{
        loading,
        techsList,
        isAdding,
        setIsAdding,
        createTechs,
        setTechsList,
        setIsUpdating,
        isUpdating,
      }}
    >
      {children}
    </TechsContext.Provider>
  );
};
