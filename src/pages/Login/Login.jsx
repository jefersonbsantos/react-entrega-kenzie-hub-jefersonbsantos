import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { Title2Styled } from "../../styles/tipography.js";
import { LoginStyled } from "./login.js";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../providers/userContext.jsx";

export const LoginPage = () => {
  const { register, handleSubmit, reset } = useForm();

  const { submit } = useContext(UserContext);
  return (
    <LoginStyled>
      <header>
        <Link to={"/"}>
          <img src={Logo} alt="Imagem do logotipo da Kenzie Hub" />
        </Link>
      </header>
      <main>
        <section>
          <form onSubmit={handleSubmit(submit)}>
            <Title2Styled>Login</Title2Styled>
            <p>Email</p>
            <input type="email" placeholder="Email" {...register("email")} />
            <p>Senha</p>
            <input
              type="password"
              placeholder="Senha"
              {...register("password")}
            />
            <button className="login__button">Entrar</button>
            <p className="sign-in__text">Ainda não possui uma conta?</p>
            <button
              className="sign-in__button"
              onClick={() => navigate("/register")}
            >
              Cadastre-se
            </button>
          </form>
        </section>
      </main>
    </LoginStyled>
  );
};
