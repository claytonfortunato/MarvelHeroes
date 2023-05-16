import * as C from "./styles";

interface CharProps {
  name: string;
  image: string;
}

export const Characters = ({ name, image }: CharProps) => {
  return (
    <C.Container>
      <img src={image} alt="" />
      <C.Header>{name}</C.Header>
    </C.Container>
  );
};
