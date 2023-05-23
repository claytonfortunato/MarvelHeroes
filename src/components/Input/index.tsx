import { SearchProps } from "../../@types/interface";

import * as C from "./styles";

export const Input = ({ placeholder, search, value }: SearchProps) => {
  return (
    <C.Container>
      <C.Input value={value} placeholder={placeholder} onChange={search} />
    </C.Container>
  );
};
