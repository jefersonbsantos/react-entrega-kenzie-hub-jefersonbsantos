import { useForm } from "react-hook-form";
import { TechsContext } from "../../providers/techsContext";
import { useContext } from "react";
import { UpdateDeleteTechStyled } from "./updateDeleteTech";
import { Title2Styled } from "../../styles/tipography";

export const UpdateDeleteTechs = () => {
  const { setIsUpdating, updateTechs, techsList, deleteTechs, isUpdating } =
    useContext(TechsContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <UpdateDeleteTechStyled>
      <div className="modalBox">
        <div className="modalBox__header">
          <Title2Styled>Tecnologia Detalhes</Title2Styled>
          <button onClick={() => setIsUpdating(false)}>X</button>
        </div>
        <form onSubmit={handleSubmit(updateTechs)}>
          <p>Nome</p>
          <input type="text" disabled placeholder={isUpdating.title} />
          <p>Status</p>
          <select name="" id="" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <div>
            <button>Salvar alterações</button>
            <span onClick={() => deleteTechs()}>Excluir</span>
          </div>
        </form>
      </div>
    </UpdateDeleteTechStyled>
  );
};
