import * as C from "./styles";

interface ComicsData {
  image: string;
  title: string;
}

export const Comics = ({ image, title }: ComicsData) => {
  return (
    <C.Container>
      <C.ImageComics src={image} />
      <C.TitleComics>{title}</C.TitleComics>
    </C.Container>
  );
};
