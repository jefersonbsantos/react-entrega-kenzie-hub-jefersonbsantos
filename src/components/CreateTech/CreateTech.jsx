import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechsContext } from "../../providers/techsContext";

export const CreateTechs = () => {
  const { createTechs, setIsAdding } = useContext(TechsContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <div>
        <div>
          <h2>Cadastrar Tecnologia</h2>
          <button onClick={() => setIsAdding(false)}>X</button>
        </div>
        <form onSubmit={handleSubmit(createTechs)}>
          <p>Nome</p>
          <input
            type="text"
            placeholder="Nome da Tecnologia"
            {...register("title")}
          />
          <select name="" id="" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <button>Cadastrar Tecnologia</button>
        </form>
      </div>
    </div>
  );
};
