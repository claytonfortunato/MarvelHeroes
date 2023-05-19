import { ComicsData } from "../../@types/interface";

import * as C from "./styles";

export const SliderYear = ({ title, thumbnail }: ComicsData) => {
  return (
    <C.Container>
      <img src={thumbnail} alt="" />
      <span>{title}</span>
    </C.Container>
  );
};
