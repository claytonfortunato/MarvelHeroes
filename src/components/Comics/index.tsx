import { ComicsInterface } from "../../@types/interface";

import * as C from "./styles";

export const Comics = ({ image, title }: ComicsInterface) => {
  return (
    <C.Container>
      <C.ImageComics src={image} />
      <C.TitleComics>{title}</C.TitleComics>
    </C.Container>
  );
};
