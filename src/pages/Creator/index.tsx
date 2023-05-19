import { useEffect, useState } from "react";

import api from "../../services/api";

import * as C from "./styles";

export const Creator = () => {
  const [creators, setCreators] = useState([]);

  return (
    <C.Container>
      <C.Header>Creators</C.Header>

      <C.Content></C.Content>
    </C.Container>
  );
};
