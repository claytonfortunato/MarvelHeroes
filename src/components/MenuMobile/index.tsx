import { useEffect } from "react";
import { Link } from "react-router-dom";

import { X } from "phosphor-react";
import { MenuProps } from "../../@types/interface";

import * as C from "./styles";

export const MenuMobile = ({ menuIsVisible, setMenuIsVisible }: MenuProps) => {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? "hidden" : "auto";
  }, [menuIsVisible]);

  return (
    <C.Container menuOpen={menuIsVisible}>
      <X size={45} onClick={() => setMenuIsVisible(false)} />

      <C.Navbar onClick={() => setMenuIsVisible(false)}>
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
        <Link to="/comics">Comics</Link>

        <Link to="/creator">Creators</Link>

        <Link to="/series">Series</Link>
      </C.Navbar>
    </C.Container>
  );
};
