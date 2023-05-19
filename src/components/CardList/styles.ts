import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  background-color: #333;
  max-width: 300px;
  transition: all 0.3s ease-in;

  img {
    width: 300px;
  }

  span {
    color: ${(props) => props.theme.colors.white};
    font-size: 16px;
  }
`;
