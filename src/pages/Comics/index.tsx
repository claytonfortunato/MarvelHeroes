import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

import { PropsData } from "../../@types/interface";
import { ArrowDown } from "phosphor-react";

import { CardList } from "../../components/CardList";
import { Loading } from "../../components/Loading";

import * as C from "./styles";

export const Comics = () => {
  const [comics, setComics] = useState<PropsData[]>([]);

  useEffect(() => {
    api
      .get(`/comics`)
      .then((resp) => {
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

      <C.Content>
        {comics.length === 0 ? (
          <Loading />
        ) : (
          comics.map((comic) => (
            <Link to={comic.urls[0].url} target="_blank" key={comic.id}>
              <CardList
                key={comic.id}
                name={comic.title}
                thumbnail={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
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
