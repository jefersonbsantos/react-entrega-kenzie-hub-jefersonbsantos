import { useState } from "react";
import { Reset } from "./styles/reset.js";
import { GlobalStyle } from "./styles/globalStyles.js";
import { LoginPage } from "./pages/Login/Login.jsx";
import { RoutesMain } from "./routes/RoutesMain.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Reset />
      <GlobalStyle />
      <RoutesMain />
    </>
  );
}

export default App;
