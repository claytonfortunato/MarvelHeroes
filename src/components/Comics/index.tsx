import { ComicsInterface } from "../../@types/interface";

import * as C from "./styles";

export const Comics = ({ image, title }: ComicsInterface) => {
  return (
    <C.Container>
      <C.ImageComics src={image} />
      <span>{title}</span>
    </C.Container>
  );
};
