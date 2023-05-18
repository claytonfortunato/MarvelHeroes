import { ComicsInterface } from "../../@types/interface";

import * as C from "./styles";

export const Comics = ({ image, title }: ComicsInterface) => {
  return (
    <C.Container>
      <img src={image} alt="" />
      <span>{title}</span>
    </C.Container>
  );
};
