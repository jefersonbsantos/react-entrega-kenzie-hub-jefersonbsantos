import { Reset } from "./styles/reset.js";
import { GlobalStyle } from "./styles/globalStyles.js";
import { LoginPage } from "./pages/Login/Login.jsx";
import { RoutesMain } from "./routes/RoutesMain.jsx";

export const App = () => {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <RoutesMain />
    </>
  );
};
