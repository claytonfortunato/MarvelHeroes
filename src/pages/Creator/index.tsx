import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
          <Link to={creator.urls[0].url} target="_blank">
            <CardList
              name={creator.firstName}
              thumbnail={`${creator.thumbnail.path}.${creator.thumbnail.extension}`}
            />
          </Link>
        ))}
      </C.Content>
    </C.Container>
  );
};
