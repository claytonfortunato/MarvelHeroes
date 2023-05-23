import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";
import { CreatorData } from "../../@types/interface";
import { ArrowDown } from "phosphor-react";

import { CardList } from "../../components/CardList";

import * as C from "./styles";
import { Loading } from "../../components/Loading";
import { Input } from "../../components/Input";

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
            <Link to={creator.urls[0].url} target="_blank" key={creator.id}>
              <CardList
                key={creator.id}
                name={creator.firstName}
                thumbnail={`${creator.thumbnail.path}.${creator.thumbnail.extension}`}
              />
            </Link>
          ))
        )}
      </C.Content>

      <C.Button onClick={handleShowMore}>
        <ArrowDown size={32} />
      </C.Button>
    </C.Container>
  );
};
