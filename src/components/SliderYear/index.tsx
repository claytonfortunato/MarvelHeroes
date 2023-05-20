import * as C from "./styles";

interface SliderData {
  title: string;
  thumbnail: string;
}

export const SliderYear = ({ title, thumbnail }: SliderData) => {
  return (
    <C.Container>
      {/* <img src={thumbnail} alt="" />
      <span>{title}</span> */}
      <C.Effect>
        <C.EffectImage>
          <C.Image src={thumbnail} />
        </C.EffectImage>
        <C.EffectText>
          <C.Inner>
            <span>{title}</span>
          </C.Inner>
        </C.EffectText>
      </C.Effect>
    </C.Container>
  );
};
