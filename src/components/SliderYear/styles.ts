import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  margin: 10px;

  transition: all 0.3s ease-in;
  cursor: pointer;

  &:hover {
    scale: 1.1;
  }

  img {
    width: 360px;
    height: 300px;
    border-radius: 6px;
  }

  span {
    font-size: 16px;
    margin-right: 18px;
    margin-top: 10px;
  }
`;
