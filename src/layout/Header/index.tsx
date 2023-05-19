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
        <Link to="/characters">Characters</Link>
        <Link to="/comics">Comics</Link>

        <Link to="/creator">Creators</Link>

        <Link to="/series">Series</Link>
      </C.Navbar>
    </C.Container>
  );
};
