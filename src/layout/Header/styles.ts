import styled from "styled-components";
import banner from "../../assets/banner.jpg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: all 0.3s;
  width: 100%;
  height: 100px;
  border: 3px solid ${(props) => props.theme.colors.black02};

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    background-image: url(${banner});
    filter: grayscale(100%);
    background-size: cover;
    background-position: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
  }

  > section {
    background-color: ${(props) => props.theme.colors.red};
    border-radius: 6px;
    .mobile {
      display: none;
      @media (max-width: 840px) {
        display: initial;
      }
    }
  }
`;

export const ImageLogo = styled.img`
  width: 200px;
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  gap: 10px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 20px;
    font-weight: 700;
    background-color: ${(props) => props.theme.colors.red};
    color: ${(props) => props.theme.colors.white};

    padding: 6px;

    border-radius: 4px;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: ${(props) => props.theme.colors.red};
      background-color: ${(props) => props.theme.colors.white};
    }
  }

  svg {
    margin: 0px 6px;
  }

  @media (max-width: 840px) {
    display: none;
  }
`;

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: red;
  border-radius: 6px;
  padding: 6px;
  transition: all 0.3s ease-in;

  &:hover {
    opacity: 0.7;
  }

  span,
  svg {
    font-size: 16px;
    color: #fff;
  }

  @media (max-width: 840px) {
    display: none;
  }
`;
