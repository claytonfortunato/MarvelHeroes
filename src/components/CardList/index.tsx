import * as C from "./styles";

interface CreatorProps {
  name: string;
  thumbnail: string;
}

export const CardList = ({ name, thumbnail }: CreatorProps) => {
  return (
    <C.Container>
      <img src={thumbnail} alt="" />
      <span>{name}</span>
    </C.Container>
  );
};
