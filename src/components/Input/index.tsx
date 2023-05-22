import { FormEvent, useCallback, useRef } from "react";

// import { PropsInput } from "../../@types/interface";
import { MagnifyingGlass } from "phosphor-react";

import * as C from "./styles";

export type SearchProps = {
  placeholder?: string;
  error?: string;
  onSubmit?: (inputValue: string) => void;
};

export const Input = ({
  placeholder = "Ex: iron main",
  error = "",
  onSubmit,
}: SearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      const inputValue = inputRef.current?.value || "";

      !!onSubmit && onSubmit(inputValue);
    },
    [onSubmit]
  );

  return (
    <C.Container onSubmit={handleSubmit}>
      <C.Input id="search" ref={inputRef} placeholder={placeholder} />
      <C.ButtonInput type="submit">
        <MagnifyingGlass size={24} />
      </C.ButtonInput>

      {!!error && <C.Error>{error}</C.Error>}
    </C.Container>
  );
};
