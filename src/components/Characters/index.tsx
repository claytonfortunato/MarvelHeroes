import * as C from "./styles";

interface CharData {
  name: string;
  image: string;
}

export const Characters = ({ name, image }: CharData) => {
  return (
    <C.Container>
      <C.ImageChar src={image} />
      <C.Header>{name}</C.Header>
    </C.Container>
  );
};
