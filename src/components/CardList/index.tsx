import * as C from "./styles";

interface CreatorProps {
  name: string;
  thumbnail: string;
}

export const CardList = ({ name, thumbnail }: CreatorProps) => {
  return (
    <C.Container>
      <C.Effect>
        <C.EffectImage>
          <C.Image src={thumbnail} />
        </C.EffectImage>
        <C.EffectText>
          <C.Inner>
            <span>{name}</span>
          </C.Inner>
        </C.EffectText>
      </C.Effect>
    </C.Container>
  );
};
