import Logo from "../../assets/marvel.svg";

import * as C from "./styles";

export const Header = () => {
  return (
    <C.Container>
      <C.ImageLogo src={Logo} />

      <C.Navbar>
        <a href="">Home</a>
        <a href="">Comics</a>
        <a href="">Abouts</a>
      </C.Navbar>
    </C.Container>
  );
};
