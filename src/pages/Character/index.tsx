import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";
import { ArrowDown } from "phosphor-react";

import { PropsData } from "../../@types/interface";

import { Input } from "../../components/Input";
import { CardList } from "../../components/CardList";
import { Loading } from "../../components/Loading";

import * as C from "./styles";

export const Character = () => {
  const [characters, setCharacters] = useState<PropsData[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api
      .get("/characters")
      .then((resp) => {
        setCharacters(resp.data.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    async function SearchHero() {
      const response = await api.get("/characters", {
        params: {
          limit: 15,
          offset: 0,
          nameStartsWith: search,
        },
      });
      setCharacters(response.data.data.results);
    }
    SearchHero();
  }, [search]);

  const handleShowMore = useCallback(async () => {
    try {
      const offset = characters.length;
      const response = await api.get("characters", {
        params: {
          offset,
        },
      });
      setCharacters([...characters, ...response.data.data.results]);
    } catch (err) {
      console.log(err);
    }
  }, [characters]);

  return (
    <C.Container>
      <C.HeaderCharacter>Characters</C.HeaderCharacter>

      <Input
        placeholder="Search by character"
        value={search}
        search={(e) => setSearch(e.target.value)}
      />

      <C.Content>
        {characters.length === 0 ? (
          <Loading />
        ) : (
          characters.map((char) => (
            <Link to={char.urls[0].url} key={char.id}>
              <CardList
                key={char.id}
                name={char.name}
                thumbnail={`${char.thumbnail.path}.${char.thumbnail.extension}`}
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
