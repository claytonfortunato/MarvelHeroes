import * as C from "./styles";

import { PropsData } from "../../@types/types";

export const Characters = ({ name, id }: PropsData) => {
  return (
    <C.Container>
      <h1>{name}</h1>
      <span>{id}</span>
    </C.Container>
  );
};
