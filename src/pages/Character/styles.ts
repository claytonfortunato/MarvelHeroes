import styled from "styled-components";

export const Container = styled.div``;

export const HeaderCharacter = styled.h1`
  text-align: center;
  font-size: 2.4rem;
  color: ${(props) => props.theme.colors.white};
  background-color: red;
  margin: 10px;
  border-radius: 12px;
`;

export const ContentForm = styled.form`
  display: flex;
  justify-content: center;
  input {
    width: 50%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Button = styled.button`
  cursor: pointer;
`;
