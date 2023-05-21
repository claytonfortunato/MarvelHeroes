import shield from "../../assets/captain.svg";

import * as C from "./styles";

export const Loading = () => {
  return (
    <C.Container>
      <C.ImageContent>
        <img src={shield} alt="" />
      </C.ImageContent>
      <C.Background />
    </C.Container>
  );
};
