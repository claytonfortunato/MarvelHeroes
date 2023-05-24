import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 2.4rem;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.red};
  border-radius: 12px;
  margin: 10px 0px;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
`;

export const Button = styled.button`
  width: 80px;
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.colors.red};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin: 10px 0px;
  transition: all 0.3s ease;
  padding: 4px;

  &:hover {
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.red};
  }
`;
