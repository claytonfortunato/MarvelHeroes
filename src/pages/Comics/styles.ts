import styled from "styled-components";

export const Container = styled.div``;

export const HeaderComics = styled.h1`
  font-size: 22px;
  color: #fff;
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Button = styled.button`
  width: 80px;

  background: ${(props) => props.theme.colors.red};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin: 1% 45%;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.red};
  }
`;
