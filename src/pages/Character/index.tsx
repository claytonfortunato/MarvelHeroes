import { useState, useEffect, useCallback } from "react";
import { Characters } from "../../components/Characters";

import api from "../../services/api";
import { ArrowDown } from "phosphor-react";

import { PropsData } from "../../@types/interface";

import * as C from "./styles";

export const Character = () => {
  const [characters, setCharacters] = useState<PropsData[]>([]);

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

      <C.ContentForm>
        <input type="text" />
      </C.ContentForm>

      <C.Content>
        {characters.map((character) => (
          <Characters
            name={character.name}
            image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          />
        ))}
      </C.Content>

      <C.Button onClick={handleShowMore}>
        <ArrowDown size={32} />
      </C.Button>
    </C.Container>
  );
};
