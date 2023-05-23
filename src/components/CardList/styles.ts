import styled from "styled-components";

export const Image = styled.img`
  width: 240px;
  height: 360px;
  border-radius: 6px;
  transition: all 0.5s ease-in;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s ease-in;

  margin: 20px;
  padding: 20px;
  position: relative;
  pointer-events: auto;

  &:hover {
    transform: scale(1.04);
  }
`;

export const Effect = styled.div`
  position: relative;
  overflow: hidden;
`;

export const EffectImage = styled.div`
  font-size: 0;
  overflow: hidden;
`;

export const EffectText = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  bottom: 15px;
  left: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  opacity: 0;
  transition: all 0.4s ease-in;
  background: rgba(0, 0, 0, 0.5);
  border: 3px solid #fff;
  border-radius: 6px;

  &::before,
  ::after {
    position: absolute;
    display: block;
    width: 100%;
    height: 0;
    content: "";
  }

  &:hover {
    opacity: 1;
  }
`;

export const Inner = styled.div`
  position: absolute;
  padding: 15px;
  z-index: 1;

  span {
    color: #fff;
    font-size: 18px;
  }

  ${EffectImage} {
    transform: scale(1.2);
  }
`;
