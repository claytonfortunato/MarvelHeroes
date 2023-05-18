import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  background-color: #333;
  max-width: 300px;
  border-radius: 10px;
  transition: all 0.3s ease-in;

  &:hover {
    scale: 1.1;
  }
`;

export const ImageChar = styled.img`
  width: 300px;
  height: 300px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const Header = styled.h1`
  color: ${(props) => props.theme.colors.white};
  font-weight: 300;
`;
