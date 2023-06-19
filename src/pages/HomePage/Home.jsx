import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { Title1Styled, Title2Styled } from "../../styles/tipography.js";
import { HomeStyled } from "./home.js";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const response = JSON.parse(localStorage.getItem("@USER"));
  const navigate = useNavigate();

  return (
    <HomeStyled>
      <header>
        <img src={Logo} alt={Logo} />
        <button
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
        >
          Sair
        </button>
      </header>
      <main>
        <section className="profile">
          <p className="profile__name">Olá, {response.name} 🔥</p>
          <p className="profile__module">{response.course_module}</p>
        </section>
        <section>
          <Title1Styled>Que pena! Estamos em desenvolvimento :(</Title1Styled>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades.
          </p>
          {/* <div>
            <Title2Styled>Tecnologias</Title2Styled>
            <button>+</button>
          </div>
          <ul>
            <li>
              <span className="tech__name">React JS</span>
              <span className="tech__level">Intermediário</span>
            </li>
            <li>
              <span className="tech__name">Next JS</span>
              <span className="tech__level">Iniciante</span>
            </li>
          </ul> */}
        </section>
      </main>
    </HomeStyled>
  );
};
