import { Link } from "react-router-dom";

import { X } from "phosphor-react";

import * as C from "./styles";

interface MenuProps {
  menuIsVisible: boolean;
  setMenuIsVisible: boolean;
}

export const MenuMobile = ({ menuIsVisible, setMenuIsVisible }: MenuProps) => {
  return (
    <C.Container menuOpen={menuIsVisible}>
      <X size={45} onClick={() => setMenuIsVisible(false)} />

      <C.Navbar>
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
        <Link to="/comics">Comics</Link>

        <Link to="/creator">Creators</Link>

        <Link to="/series">Series</Link>
      </C.Navbar>
    </C.Container>
  );
};
