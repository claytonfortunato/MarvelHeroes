import { PropsInput } from "../../@types/interface";
import { MagnifyingGlass } from "phosphor-react";

import * as C from "./styles";

export const Input = ({ type, placeholder }: PropsInput) => {
  return (
    <C.Container>
      <C.Input type={type} placeholder={placeholder} />
      <C.ButtonInput>
        <MagnifyingGlass size={24} />
      </C.ButtonInput>
    </C.Container>
  );
};
