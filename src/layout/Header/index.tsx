import Logo from "../../assets/marvel.svg";
import { Link } from "react-router-dom";

import * as C from "./styles";

export const Header = () => {
  return (
    <C.Container>
      <C.ImageLogo src={Logo} />

      <C.Navbar>
        <Link to="/characters">
          <a href="">Characters</a>
        </Link>
        <Link to="/comics">
          <a href="">Comics</a>
        </Link>
        <a href="">Creators</a>
        <a href="">Events</a>
        <a href="">Series</a>
      </C.Navbar>
    </C.Container>
  );
};
