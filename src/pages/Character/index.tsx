import { useState, useEffect } from "react";

import * as C from "./styles";
import api from "../../services/api";
import { Characters } from "../../components/Characters";

import { PropsData } from "../../@types/types";

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

  return (
    <C.Container>
      <C.HeaderCharacter>Characters</C.HeaderCharacter>

      <C.Content>
        {characters.map((character) => (
          <Characters
            name={character.name}
            image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          />
        ))}
      </C.Content>
    </C.Container>
  );
};
