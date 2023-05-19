import Logo from "../../assets/marvel.svg";
import { Link } from "react-router-dom";

import { User } from "phosphor-react";
import { BookOpen } from "phosphor-react";
import { FilmStrip } from "phosphor-react";
import { CrownSimple } from "phosphor-react";
import { HouseLine } from "phosphor-react";

import * as C from "./styles";

export const Header = () => {
  return (
    <C.Container>
      <C.ImageLogo src={Logo} />

      <C.Navbar>
        <Link to="/characters">
          <User size={20} />
          Characters
        </Link>
        <Link to="/comics">
          <BookOpen />
          Comics
        </Link>

        <Link to="/creator">
          <CrownSimple />
          Creators
        </Link>

        <Link to="/series">
          <FilmStrip />
          Series
        </Link>
      </C.Navbar>

      <Link to="/">
        <C.Home>
          <HouseLine size={26} />
          <span>Main</span>
        </C.Home>
      </Link>
    </C.Container>
  );
};
