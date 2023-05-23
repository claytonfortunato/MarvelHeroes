import { useEffect, useState, useCallback } from "react";

import api from "../../services/api";
import { ArrowDown } from "phosphor-react";
import { CreatorData } from "../../@types/interface";

import { CardList } from "../../components/CardList";
import { Loading } from "../../components/Loading";
import { Input } from "../../components/Input";

import * as C from "./styles";

export const Creator = () => {
  const [creators, setCreators] = useState<CreatorData[]>([]);
  const [search, setSearch] = useState("");

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
      const response = await api.get("creators", {
        params: {
          offset,
        },
      });
      setCreators([...creators, ...response.data.data.results]);
    } catch (err) {
      console.log(err);
    }
  }, [creators]);

  useEffect(() => {
    async function SearchHero() {
      const response = await api.get("/creators", {
        params: {
          limit: 15,
          offset: 0,
          nameStartsWith: search,
        },
      });
      setCreators(response.data.data.results);
    }
    SearchHero();
  }, [search]);

  return (
    <C.Container>
      <C.Header>Creators</C.Header>

      <Input
        placeholder="Search by creator"
        value={search}
        search={(e) => setSearch(e.target.value)}
      />

      <C.Content>
        {creators.length === 0 ? (
          <Loading />
        ) : (
          creators.map((creator) => (
            <CardList
              key={creator.id}
              name={creator.firstName}
              thumbnail={`${creator.thumbnail.path}.${creator.thumbnail.extension}`}
              details={creator.urls[0].url}
            />
          ))
        )}
      </C.Content>

      <C.Button onClick={handleShowMore}>
        <ArrowDown size={32} />
      </C.Button>
    </C.Container>
  );
};
