import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { Title2Styled } from "../../styles/tipography.js";
import { LoginStyled } from "./login.js";

export const LoginPage = () => {
  return (
    <LoginStyled>
      <header>
        <Link to={"/"}>
          <img src={Logo} alt="Imagem do logotipo da Kenzie Hub" />
        </Link>
      </header>
      <main>
        <section>
          <form>
            <Title2Styled>Login</Title2Styled>
            <p>Email</p>
            <input type="email" placeholder="Email" />
            <p>Senha</p>
            <input type="password" placeholder="Senha" />
            <button className="login__button">Entrar</button>
            <p className="sign-in__text">Ainda não possui uma conta?</p>
            <button className="sign-in__button">Cadastre-se</button>
          </form>
        </section>
      </main>
    </LoginStyled>
  );
};
