// import { Home } from "./pages/Home";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AppRouter />
      {/* <Home /> */}
    </ThemeProvider>
  );
}

export default App;
