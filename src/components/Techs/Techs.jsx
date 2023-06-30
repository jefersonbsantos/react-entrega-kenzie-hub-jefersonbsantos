import { useContext } from "react";
import { TechsContext } from "../../providers/techsContext.jsx";

export const Techs = ({ techs }) => {
  const { setIsUpdating } = useContext(TechsContext);

  return (
    <li onClick={() => setIsUpdating(true)}>
      <span className="tech__name">{techs.title}</span>
      <span className="tech__level">{techs.status}</span>
    </li>
  );
};
