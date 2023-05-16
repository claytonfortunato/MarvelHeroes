import { useState, useEffect } from "react";

import * as C from "./styles";
import api from "../../services/api";

import { PropsData } from "../../@types/types";
import { Characters } from "../../components/Characters";

export const Comics = () => {
  const [comics, setComics] = useState<PropsData[]>([]);

  useEffect(() => {
    api
      .get(`/comics`)
      .then((resp) => {
        console.log(resp.data.data.results);
        setComics(resp.data.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <C.Container>
      <C.HeaderComics>Comics</C.HeaderComics>

      <C.Content>
        {comics.map((type) => (
          <Characters
            name={type.name}
            image={`${type.thumbnail.path}.${type.thumbnail.extension}`}
          />
        ))}
      </C.Content>
    </C.Container>
  );
};
