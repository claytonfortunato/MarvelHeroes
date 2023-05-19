import { useEffect, useState } from "react";

import api from "../../services/api";
import { CreatorData } from "../../@types/interface";

import * as C from "./styles";
import { CardList } from "../../components/CardList";

export const Creator = () => {
  const [creators, setCreators] = useState<CreatorData[]>([]);

  useEffect(() => {
    api
      .get(`/creators`)
      .then((resp) => {
        setCreators(resp.data.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <C.Container>
      <C.Header>Creators</C.Header>

      <C.Content>
        {creators.map((creator) => (
          <CardList
            name={creator.firstName}
            thumbnail={`${creator.thumbnail.path}.${creator.thumbnail.extension}`}
          />
        ))}
      </C.Content>
    </C.Container>
  );
};
