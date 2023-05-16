import { BrowserRouter as Route, Routes, Router } from "react-router-dom";

import { Character } from "../pages/Character";
import { Comics } from "../pages/Comics";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route />

        <Route path="/characters" element={<Character />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/creators" />
        <Route path="/series" />
      </Routes>
    </Router>
  );
};

export default AppRouter;
