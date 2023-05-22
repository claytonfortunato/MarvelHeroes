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
  const [heroes, setHeroes] = useState<PropsData[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function SearchHero() {
      const response = await api.get("/characters", {
        params: {
          limit: 15,
          offset: 0,
          nameStartsWith: search,
        },
      });
      setHeroes(response.data.data.results);
    }
    SearchHero();
  }, [search]);

  return (
    <C.Container>
      <C.HeaderCharacter>Characters</C.HeaderCharacter>

      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <C.Content>
        {heroes.map((char) => (
          <Link to={char.urls[0].url} key={char.id}>
            <CardList
              key={char.id}
              name={char.name}
              thumbnail={`${char.thumbnail.path}.${char.thumbnail.extension}`}
            />
          </Link>
        ))}
      </C.Content>

      {/* <C.Button onClick={handleShowMore}>
        <ArrowDown size={32} />
      </C.Button> */}
    </C.Container>
  );
};
