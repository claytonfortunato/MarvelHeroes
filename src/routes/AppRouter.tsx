import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "../layout/Header";
import { Home } from "../pages/Home";
import { Character } from "../pages/Character";
import { Comics } from "../pages/Comics";
import { Creator } from "../pages/Creator";
import { Series } from "../pages/Series";
import { Footer } from "../layout/Footer";

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/characters" element={<Character />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/creator" element={<Creator />} />
        <Route path="/series" element={<Series />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
