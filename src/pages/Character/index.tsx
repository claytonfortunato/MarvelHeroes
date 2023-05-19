import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";
import { ArrowDown } from "phosphor-react";

import { PropsData } from "../../@types/interface";

import { Characters } from "../../components/Characters";
import { Input } from "../../components/Input";

import * as C from "./styles";

export const Character = () => {
  const [characters, setCharacters] = useState<PropsData[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api
      .get(`/characters`)
      .then((resp) => {
        setCharacters(resp.data.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

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
        type="text"
        placeholder="Search by character"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <C.Content>
        {characters.map((character) => (
          <Link to={character.urls[0].url}>
            <Characters
              name={character.name}
              image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
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
