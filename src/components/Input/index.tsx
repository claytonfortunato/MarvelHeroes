import { PropsInput } from "../../@types/interface";
import { MagnifyingGlass } from "phosphor-react";

import * as C from "./styles";

export const Input = ({ type, placeholder, onChange, value }: PropsInput) => {
  return (
    <C.Container>
      <C.Input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <C.ButtonInput>
        <MagnifyingGlass size={24} />
      </C.ButtonInput>
    </C.Container>
  );
};
