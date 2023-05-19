import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;

  transition: all 0.3s ease-in;

  margin-bottom: 12px;

  &:hover {
    scale: 1.1;
  }

  img {
    max-width: 300px;
    height: 300px;
    border-radius: 6px;
  }

  span {
    font-size: 16px;
    margin-right: 18px;
    margin-top: 10px;
  }
`;
