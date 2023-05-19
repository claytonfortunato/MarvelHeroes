import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.red};
  color: #fff;
  font-size: 20px;

  span {
    margin-left: 10px;
    color: ${(props) => props.theme.colors.black02};
  }
`;
