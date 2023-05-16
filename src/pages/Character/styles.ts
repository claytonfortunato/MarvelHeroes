import styled from "styled-components";

export const Container = styled.div``;

export const HeaderCharacter = styled.h1`
  text-align: center;
  font-size: 2.4rem;
  color: ${(props) => props.theme.colors.white};
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
