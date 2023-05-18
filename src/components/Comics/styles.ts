import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  background-color: #222;
  border-radius: 10px;
  transition: all 0.3s ease-in;
  max-width: 300px;
  span {
    font-size: 18px;
    color: #fff;
    margin: 6px;
  }

  &:hover {
    scale: 1.1;
  }
`;

export const ImageComics = styled.img`
  width: 300px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;
