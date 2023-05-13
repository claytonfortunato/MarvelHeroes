import styled from "styled-components";
import banner from "../../assets/banner.jpg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: all 0.3s;
  width: 100%;
  height: 100px;
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
`;

export const ImageLogo = styled.img`
  width: 200px;
`;

export const Navbar = styled.div`
  font-size: 16px;
  background-color: #fff;
`;
