import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  img {
    width: 12rem;
    height: 12rem;
  }

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #333;
    margin: 10px;
    width: 300px;
    border-radius: 6px;
  }
`;

export const ContentCarousel = styled.div`
  width: 100%;
  height: 600px;
  background-color: #333;
`;

export const HeaderCarousel = styled.h1`
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  font-size: 24px;
  font-weight: 500;
`;

export const BoxChar = styled.div`
  display: flex;
  overflow-x: scroll;

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;
    background-color: #fff;
    margin: 10px;

    clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);

    p {
      font-size: 18px;
    }

    img {
      width: 360px;
      height: 300px;
      border-radius: 6px;
    }
  }
`;
