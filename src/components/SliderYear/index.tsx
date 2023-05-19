import * as C from "./styles";

interface SliderData {
  title: string;
  thumbnail: string;
}

export const SliderYear = ({ title, thumbnail }: SliderData) => {
  return (
    <C.Container>
      <img src={thumbnail} alt="" />
      <span>{title}</span>
    </C.Container>
  );
};
