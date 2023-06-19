import { Reset } from "./styles/reset.js";
import { GlobalStyle } from "./styles/globalStyles.js";
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
