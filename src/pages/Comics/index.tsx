import { useState, useEffect, useCallback } from "react";

import api from "../../services/api";

import { PropsData } from "../../@types/interface";
import { ArrowDown } from "phosphor-react";

import { CardList } from "../../components/CardList";
import { Loading } from "../../components/Loading";

import * as C from "./styles";
import { Input } from "../../components/Input";

export const Comics = () => {
  const [comics, setComics] = useState<PropsData[]>([]);
  const [search, setSearch] = useState("");

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
      const response = await api.get("/comics", {
        params: {
          offset,
        },
      });
      setComics([...comics, ...response.data.data.results]);
    } catch (err) {
      console.log(err);
    }
  }, [comics]);

  useEffect(() => {
    async function SearchHero() {
      const response = await api.get("/comics", {
        params: {
          limit: 15,
          offset: 0,
          nameStartsWith: search,
        },
      });
      setComics(response.data.data.results);
    }
    SearchHero();
  }, [search]);

  return (
    <C.Container>
      <C.HeaderComics>Comics</C.HeaderComics>

      <Input
        placeholder="Search by comics"
        value={search}
        search={(e) => setSearch(e.target.value)}
      />

      <C.Content>
        {comics.length === 0 ? (
          <Loading />
        ) : (
          comics.map((comic) => (
            <CardList
              key={comic.id}
              name={comic.title}
              thumbnail={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              details={comic.urls[0].url}
            />
          ))
        )}
      </C.Content>

      <C.Button onClick={handleShowMore}>
        <ArrowDown size={32} />
      </C.Button>
    </C.Container>
  );
};
