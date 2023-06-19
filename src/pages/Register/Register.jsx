import { useForm } from "react-hook-form";
import Logo from "../../assets/Logo.svg";
import { Title2Styled } from "../../styles/tipography.js";
import { RegisterStyled } from "./register.js";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerValidationSchema } from "./registerValidationSchema.js";
import { api } from "../../services/api.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerValidationSchema),
  });

  const submit = async (formData) => {
    try {
      const { data } = await api.post("/users", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        confirm: formData.password,
        bio: formData.bio,
        contact: formData.contact,
        course_module: formData.course_module,
      });
      toast.success("Cadastro realizado");
    } catch (error) {
      toast.error("Preencha os campos corretamente");
    }
  };

  const navigate = useNavigate();

  return (
    <RegisterStyled>
      <header>
        <img src={Logo} alt="" />
        <button className="header__button" onClick={() => navigate("/")}>
          Voltar
        </button>
      </header>
      <main>
        <section>
          <form onSubmit={handleSubmit(submit)}>
            <Title2Styled>Crie sua conta</Title2Styled>
            <p className="form__subtitle">Rápido e grátis, vamos nessa</p>
            <p>Nome</p>
            <input
              type="text"
              placeholder="Digite aqui seu nome"
              {...register("name")}
            />
            <p>Email</p>
            <input
              type="email"
              placeholder="Digite aqui seu email"
              {...register("email")}
            />
            <p>Senha</p>
            <input
              type="password"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
            <p>Confirmar senha</p>
            <input
              type="password"
              placeholder="Confirme sua senha"
              {...register("confirm")}
            />
            <p>Bio</p>
            <input
              type="text"
              placeholder="Fale sobre você"
              {...register("bio")}
            />
            <p>Contato</p>
            <input
              type="text"
              placeholder="Opção de contato"
              {...register("contact")}
            />
            <p>Selecionar módulo</p>
            <select name="modulo" id="" {...register("course_module")}>
              <option value="Primeiro módulo (Introdução ao Frontend)">
                Primeiro módulo (Introdução ao Frontend)
              </option>
              <option value="Segundo módulo (Frontend Avançado)">
                Segundo módulo (Frontend Avançado)
              </option>
              <option value="Terceiro módulo (Introdução ao Backend)">
                Terceiro módulo (Introdução ao Backend)
              </option>
              <option value="Quarto módulo (Backend Avançado)">
                Quarto módulo (Backend Avançado)
              </option>
            </select>
            <button>Cadastrar</button>
          </form>
        </section>
      </main>
    </RegisterStyled>
  );
};
