import { useForm } from "react-hook-form";
import { TechsContext } from "../../providers/techsContext";
import { useContext } from "react";

export const UpdateDeleteTechs = () => {
  const { setIsUpdating } = useContext(TechsContext);

  return (
    <div>
      <div>
        <div>
          <h2>Tecnologia Detalhes</h2>
          <button onClick={() => setIsUpdating(false)}>X</button>
        </div>
        <p>Nome</p>
        <input type="text" disabled placeholder="Nome da tec" />
        <p>Status</p>
        <select name="" id="">
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <button>Salvar alterações</button>
        <button>Excluir</button>
      </div>
    </div>
  );
};
