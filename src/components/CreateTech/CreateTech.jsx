import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechsContext } from "../../providers/techsContext";
import { CreateTechStyled } from "./createTech.js";
import { Title2Styled } from "../../styles/tipography";

export const CreateTechs = () => {
  const { createTechs, setIsAdding } = useContext(TechsContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <CreateTechStyled className="modalOverlay">
      <div className="modalBox">
        <div className="modalHeader">
          <Title2Styled>Cadastrar Tecnologia</Title2Styled>
          <button onClick={() => setIsAdding(false)}>X</button>
        </div>
        <form onSubmit={handleSubmit(createTechs)}>
          <p>Nome</p>
          <input
            type="text"
            placeholder="Nome da Tecnologia"
            {...register("title")}
          />
          <p>Selecionar status</p>
          <select name="" id="" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <button>Cadastrar Tecnologia</button>
        </form>
      </div>
    </CreateTechStyled>
  );
};
