import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Character } from "../pages/Character";
import { Comics } from "../pages/Comics";
import { Home } from "../pages/Home";
import { Header } from "../layout/Header";

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/characters" element={<Character />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/creators" />
        <Route path="/series" />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
