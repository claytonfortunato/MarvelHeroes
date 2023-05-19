import { CharData } from "../../@types/interface";

import * as C from "./styles";

export const Characters = ({ name, image }: CharData) => {
  return (
    <C.Container>
      <C.ImageChar src={image} />
      <C.Header>{name}</C.Header>
    </C.Container>
  );
};
