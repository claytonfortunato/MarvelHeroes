import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;

  transition: all 0.3s ease-in;
  max-width: 300px;
`;

export const ImageComics = styled.img`
  width: 300px;
`;

export const TitleComics = styled.span`
  /* font-size: 18px;
  color: #fff;
  margin: 6px; */
  visibility: hidden;
`;
