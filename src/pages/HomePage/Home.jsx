import Logo from "../../assets/Logo.svg";
import { Title2Styled } from "../../styles/tipography.js";
import { HomeStyled } from "./home.js";

export const HomePage = () => {
  return (
    <HomeStyled>
      <header>
        <img src={Logo} alt={Logo} />
        <button>Sair</button>
      </header>
      <main>
        <section className="profile">
          <p className="profile__name">Olá, Samuel Leão 🔥</p>
          <p className="profile__module">
            Primeiro módulo (Introdução ao Frontend)
          </p>
        </section>
        <section>
          <div>
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
          </ul>
        </section>
      </main>
    </HomeStyled>
  );
};
