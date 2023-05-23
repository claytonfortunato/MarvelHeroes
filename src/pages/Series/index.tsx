import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";
import { PropsData } from "../../@types/interface";
import { ArrowDown } from "phosphor-react";

import { CardList } from "../../components/CardList";
import { Loading } from "../../components/Loading";

import * as C from "./styles";
import { Input } from "../../components/Input";

export const Series = () => {
  const [series, setSeries] = useState<PropsData[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api
      .get(`/series`)
      .then((resp) => {
        setSeries(resp.data.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    async function SearchHero() {
      const response = await api.get("series", {
        params: {
          limit: 15,
          offset: 0,
          nameStartsWith: search,
        },
      });
      setSeries(response.data.data.results);
    }
    SearchHero();
  }, [search]);

  const handleShowMore = useCallback(async () => {
    try {
      const offset = series.length;
      const response = await api.get("series", {
        params: {
          offset,
        },
      });
      setSeries([...series, ...response.data.data.results]);
    } catch (err) {
      console.log(err);
    }
  }, [series]);

  return (
    <C.Container>
      <C.Header>Series</C.Header>

      <Input
        placeholder="Search by Series"
        value={search}
        search={(e) => setSearch(e.target.value)}
      />

      <C.Content>
        {series.length === 0 ? (
          <Loading />
        ) : (
          series.map((serie) => (
            <Link to={serie.urls[0].url} target="_blank" key={serie.id}>
              <CardList
                key={serie.id}
                name={serie.title}
                thumbnail={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
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
