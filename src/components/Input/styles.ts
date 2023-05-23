import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
`;

export const Input = styled.input`
  border: 0;
  border-bottom: 1px solid #555;
  background: transparent;
  width: 400px;
  padding: 8px 0 5px 0;
  color: ${(props) => props.theme.colors.white};
  margin-left: 10px;
  font-size: 16px;

  &:focus-within {
    border: none;
    outline: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.red};
  }
`;
