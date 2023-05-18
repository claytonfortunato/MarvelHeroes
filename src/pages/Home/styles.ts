import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const ContentCarousel = styled.div`
  width: 100%;
  padding: 10px;
  background-color: #333;
`;

export const HeaderCarousel = styled.h1`
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  background-color: ${(props) => props.theme.colors.red};
  border-radius: 12px;
`;

export const BoxChar = styled.div`
  display: flex;
  margin: 14px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderComics = styled.h1`
  font-size: 24px;
  text-align: center;
  color: #fff;
  background-color: red;
  margin: 10px;
  border-radius: 12px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #333;
  padding: 10px;
`;
