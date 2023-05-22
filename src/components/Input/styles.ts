import styled from "styled-components";

export const Container = styled.form`
  max-width: 600px;
  width: 100%;
  display: flex;
`;

export const Input = styled.input`
  width: 100%;
  padding: 6px;
  border-radius: 8px;
  outline: none;
  border: none;
`;

export const ButtonInput = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  border-radius: 8px;
  outline: none;
  border: none;
  margin-left: 10px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.red};
  transition: all 0.3s ease;

  &:hover {
    background-color: #fff;
  }

  svg {
    width: 100%;
    color: #fff;

    &:hover {
      color: red;
    }
  }
`;

export const Error = styled.div``;
