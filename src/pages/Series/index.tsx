import { useState, useEffect } from "react";

import api from "../../services/api";
import { PropsData } from "../../@types/interface";

import * as C from "./styles";
import { CardList } from "../../components/CardList";

export const Series = () => {
  const [series, setSeries] = useState<PropsData[]>([]);

  useEffect(() => {
    api
      .get(`/series`)
      .then((resp) => {
        console.log(resp.data.data.results);
        setSeries(resp.data.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <C.Container>
      <C.Header>Series</C.Header>
      <C.Content>
        {series.map((serie) => (
          <CardList
            name={serie.title}
            thumbnail={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
          />
        ))}
      </C.Content>
    </C.Container>
  );
};
