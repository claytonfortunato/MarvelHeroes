import styled, { css } from "styled-components";

interface Props {
  menuOpen: boolean;
}

export const Container = styled.div<Props>`
  position: absolute;

  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  background: linear-gradient(
    45deg,
    rgba(6, 10, 10, 1) 0%,
    rgba(126, 7, 17, 1) 64%
  );

  opacity: ${({ menuOpen }) => (menuOpen ? 1 : 0)};
  pointer-events: none;
  transition: 0.5s;
  transform: translateY(50px);

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: 0.7s;
  }

  ${({ menuOpen }) =>
    menuOpen &&
    css`
      pointer-events: auto;
      transform: translateY(0px);

      > svg {
        transform: rotate(0deg);
      }
    `}
`;

export const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  font-size: 18px;
`;
