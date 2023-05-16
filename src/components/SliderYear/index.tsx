import * as C from "./styles";

interface CardsProps {
  title: string;
  thumbnail: string;
}

export const SliderYear = ({ title, thumbnail }: CardsProps) => {
  return (
    <C.Container>
      <img src={thumbnail} alt="" />
      <span>{title}</span>
    </C.Container>
  );
};
