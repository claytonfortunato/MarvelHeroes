import { useState, useEffect, useCallback } from "react";

import api from "../../services/api";

import { PropsData } from "../../@types/interface";
import { Characters } from "../../components/Characters";

import { ArrowDown } from "phosphor-react";
import * as C from "./styles";
import { Input } from "../../components/Input";

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

  const handleShowMore = useCallback(async () => {
    try {
      const offset = comics.length;
      const response = await api.get("comics", {
        params: {
          offset,
        },
      });
      setComics([...comics, ...response.data.data.results]);
    } catch (err) {
      console.log(err);
    }
  }, [comics]);

  return (
    <C.Container>
      <C.HeaderComics>Comics</C.HeaderComics>

      <Input type="text" placeholder="Search by comics" />

      <C.Content>
        {comics.map((type) => (
          <Characters
            name={type.title}
            image={`${type.thumbnail.path}.${type.thumbnail.extension}`}
          />
        ))}
      </C.Content>

      <C.Button onClick={handleShowMore}>
        <ArrowDown size={32} />
      </C.Button>
    </C.Container>
  );
};
