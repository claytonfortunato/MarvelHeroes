import { Link } from "react-router-dom";

import * as C from "./styles";

interface CreatorProps {
  name: string;
  thumbnail: string;
  details: string;
}

export const CardList = ({ name, thumbnail, details }: CreatorProps) => {
  return (
    <C.Container>
      <Link to={details} target="_blank">
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
      </Link>
    </C.Container>
  );
};
