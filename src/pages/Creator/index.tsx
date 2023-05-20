import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";
import { CreatorData } from "../../@types/interface";
import { ArrowDown } from "phosphor-react";

import { CardList } from "../../components/CardList";
import * as C from "./styles";

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

  const handleShowMore = useCallback(async () => {
    try {
      const offset = creators.length;
      const response = await api.get("comics", {
        params: {
          offset,
        },
      });
      setCreators([...creators, ...response.data.data.results]);
    } catch (err) {
      console.log(err);
    }
  }, [creators]);

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

      <C.Button onClick={handleShowMore}>
        <ArrowDown size={32} />
      </C.Button>
    </C.Container>
  );
};
