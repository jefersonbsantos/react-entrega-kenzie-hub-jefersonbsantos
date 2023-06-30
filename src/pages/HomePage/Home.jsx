import { useContext, useState } from "react";
import Logo from "../../assets/Logo.svg";
import { Title2Styled } from "../../styles/tipography.js";
import { HomeStyled } from "./home.js";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/userContext.jsx";
import { TechsContext } from "../../providers/techsContext";
import { Techs } from "../../components/Techs/Techs.jsx";
import { CreateTechs } from "../../components/CreateTech/CreateTech.jsx";
import { UpdateDeleteTechs } from "../../components/UpdateDeleteTech/UpdateDeleteTech";

export const HomePage = () => {
  const navigate = useNavigate();
  const { submit, user, userLogout } = useContext(UserContext);
  const {
    loading,
    techsList,
    createTechs,
    isAdding,
    setIsAdding,
    setIsUpdating,
    isUpdating,
  } = useContext(TechsContext);

  return (
    <HomeStyled>
      <header>
        <img src={Logo} alt={Logo} />
        <button
          onClick={() => {
            userLogout();
          }}
        >
          Sair
        </button>
      </header>
      <main>
        <section className="profile">
          <p className="profile__name">Olá, {user?.name}</p>
          <p className="profile__module">{user?.course_module}</p>
        </section>
        <section>
          <div>
            <Title2Styled>Tecnologias</Title2Styled>
            <button
              onClick={() => {
                setIsAdding(true);
              }}
            >
              +
            </button>
            {isAdding ? <CreateTechs /> : null}
            {isUpdating ? <UpdateDeleteTechs /> : null}
          </div>
          <ul>
            {techsList.techs?.length !== 0 ? (
              techsList.techs?.map((techs) => (
                <Techs key={techs.id} techs={techs} />
              ))
            ) : (
              <p>Não há tecnologias cadastradas.</p>
            )}
          </ul>
        </section>
      </main>
    </HomeStyled>
  );
};
