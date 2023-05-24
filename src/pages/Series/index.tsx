import { useState, useEffect, useCallback } from "react";

import api from "../../services/api";
import { PropsData } from "../../@types/interface";
import { ArrowDown } from "phosphor-react";

import { CardList } from "../../components/CardList";
import { Loading } from "../../components/Loading";

import * as C from "./styles";

export const Series = () => {
  const [series, setSeries] = useState<PropsData[]>([]);

  useEffect(() => {
    api
      .get(`/series`)
      .then((resp) => {
        setSeries(resp.data.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

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

      <C.Content>
        {series.length === 0 ? (
          <Loading />
        ) : (
          series.map((serie) => (
            <CardList
              key={serie.id}
              name={serie.title}
              thumbnail={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
              details={serie.urls[0].url}
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
