import { useState, useEffect } from "react";

import * as C from "./styles";
import api from "../../services/api";

import { PropsData } from "../../@types/interface";
import { Characters } from "../../components/Characters";
import { SliderYear } from "../../components/SliderYear";

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
            name={type.title}
            image={`${type.thumbnail.path}.${type.thumbnail.extension}`}
          />
        ))}
      </C.Content>
    </C.Container>
  );
};
