import styled, { keyframes } from "styled-components";

const rotateUp = keyframes`
  0% {
    left: 100%;
    height: 0;
  }
  50% {
    left: 0;
    height: 0;
  }
  100%{
    height: 100%;
    left: 0;
  }
`;

const rotateRight = keyframes`
  0% {
    left: -100%;
    height: 0;
  }
  50% {
    left: 0;
    height: 0;
  }
  100% {
    height: 100%;
    left: 0;
  }
`;

export const Image = styled.img`
  max-width: 300px;
  height: 320px;
  border-radius: 6px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;

  transition: all 0.3s ease-in;

  margin-bottom: 12px;
  position: relative;
`;

export const Effect = styled.div`
  position: relative;
  overflow: hidden;
`;

export const EffectImage = styled.div``;

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
  transition: all 0.3s ease-in;
  background: rgba(0, 0, 0, 0.5);

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

  &::before {
    border-top: 3px solid #fff;
    border-right: 3px solid #fff;
    left: -100%;
    top: 0;
  }

  &::after {
    border-bottom: 3px solid #fff;
    border-left: 3px solid #fff;
    left: 100%;
    top: 0;
  }

  &:hover,
  &::before,
  ::after {
    animation-delay: 0.1s;
    animation-duration: 3s;
    animation-iteration-count: 2;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
  }

  &:hover,
  &::after {
    animation-name: ${rotateUp};
  }

  &:hover,
  &::before {
    animation-name: ${rotateRight};
  }
`;

export const Inner = styled.div`
  position: absolute;
  padding: 15px;
  z-index: 1;

  span {
    color: #fff;
  }
`;
