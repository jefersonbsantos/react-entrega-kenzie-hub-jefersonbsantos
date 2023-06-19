import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { Title2Styled } from "../../styles/tipography.js";
import { LoginStyled } from "./login.js";
import { useForm } from "react-hook-form";
import { api } from "../../services/api.js";
import { toast } from "react-toastify";

export const LoginPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const submit = async (formData) => {
    try {
      const { data } = await api.post("/sessions", {
        email: formData.email,
        password: formData.password,
      });
      localStorage.setItem("@USER", JSON.stringify(data.user));
      localStorage.setItem("@TOKEN", data.token);
      toast.success("Login realizado com sucesso");
      navigate("/home");
    } catch (error) {
      toast.error("E-mail ou senha incorretos");
    }
    reset();
  };

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
