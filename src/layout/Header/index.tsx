import Logo from "../../assets/marvel.svg";

import * as C from "./styles";

export const Header = () => {
  return (
    <C.Container>
      <C.ImageLogo src={Logo} />

      <C.Navbar>
        <a href="">Characters</a>
        <a href="">Comics</a>
        <a href="">Creators</a>
        <a href="">Events</a>
        <a href="">Series</a>
      </C.Navbar>
    </C.Container>
  );
};
