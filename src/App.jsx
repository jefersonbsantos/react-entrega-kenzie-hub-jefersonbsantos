import { Reset } from "./styles/reset.js";
import { GlobalStyle } from "./styles/globalStyles.js";
import { RoutesMain } from "./routes/RoutesMain.jsx";
import { useContext, useState } from "react";
import { UserContext } from "./providers/userContext.jsx";

export const App = () => {
  const { loading } = useContext(UserContext);
  return (
    <>
      <Reset />
      <GlobalStyle />
      {loading ? <p>Carregando...</p> : <RoutesMain />}
    </>
  );
};
