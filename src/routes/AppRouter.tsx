import { Route, Routes, Router } from "react-router-dom";

import { Character } from "../pages/Character";
import { Comics } from "../pages/Comics";
import { Header } from "../layout/Header";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" />

        <Route path="/characters" element={<Character />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/creators" />
        <Route path="/series" />
      </Routes>
    </Router>
  );
};

export default AppRouter;
