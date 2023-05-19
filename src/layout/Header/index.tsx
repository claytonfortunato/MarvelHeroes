import Logo from "../../assets/marvel.svg";
import { Link } from "react-router-dom";

import * as C from "./styles";

export const Header = () => {
  return (
    <C.Container>
      <Link to="/">
        <C.ImageLogo src={Logo} />
      </Link>

      <C.Navbar>
        <Link to="/characters">
          <a href="">Characters</a>
        </Link>
        <Link to="/comics">
          <a href="">Comics</a>
        </Link>

        <Link to="/creator">
          <a href="">Creators</a>
        </Link>

        <Link to="/series">
          <a href="">Series</a>
        </Link>
      </C.Navbar>
    </C.Container>
  );
};
