import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const ContentCarousel = styled.div`
  width: 100%;
  padding: 10px;

  background-color: ${(props) => props.theme.colors.black};
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
  padding: 0px 30px;

  .slick-slider {
    width: 100%;
  }

  .slick-dots {
    li {
      button {
        &:before {
          color: ${(props) => props.theme.colors.red};
        }
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderComics = styled.h1`
  font-size: 24px;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.red};
  margin: 10px;
  border-radius: 12px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.black};
  padding: 10px;
`;
