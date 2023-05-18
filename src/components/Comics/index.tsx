import * as C from "./styles";

export const Comics = ({ image, title }) => {
  return (
    <C.Container>
      <img src={image} alt="" />
      <span>{title}</span>
    </C.Container>
  );
};
