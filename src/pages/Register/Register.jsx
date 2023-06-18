import Logo from "../../assets/Logo.svg";
import { Title2Styled } from "../../styles/tipography.js";
import { RegisterStyled } from "./register.js";

export const RegisterPage = () => {
  return (
    <RegisterStyled>
      <header>
        <img src={Logo} alt="" />
        <button className="header__button">Voltar</button>
      </header>
      <main>
        <section>
          <form action="">
            <Title2Styled>Crie sua conta</Title2Styled>
            <p className="form__subtitle">Rápido e grátis, vamos nessa</p>
            <p>Nome</p>
            <input type="text" placeholder="Digite aqui seu nome" />
            <p>Email</p>
            <input type="email" placeholder="Digite aqui seu email" />
            <p>Senha</p>
            <input type="password" placeholder="Digite aqui sua senha" />
            <p>Confirmar senha</p>
            <input type="password" placeholder="Confirme sua senha" />
            <p>Bio</p>
            <input type="text" placeholder="Fale sobre você" />
            <p>Contato</p>
            <input type="text" placeholder="Opção de contato" />
            <p>Selecionar módulo</p>
            <select name="modulo" id="">
              <option value="Primeiro Módulo">Primeiro Módulo</option>
            </select>
            <button>Cadastrar</button>
          </form>
        </section>
      </main>
    </RegisterStyled>
  );
};
