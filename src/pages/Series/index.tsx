import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";
import { PropsData } from "../../@types/interface";
import { ArrowDown } from "phosphor-react";

import * as C from "./styles";
import { CardList } from "../../components/CardList";

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
      const response = await api.get("comics", {
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
        {series.map((serie) => (
          <Link to={serie.urls[0].url} target="_blank" key={serie.id}>
            <CardList
              key={serie.id}
              name={serie.title}
              thumbnail={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
            />
          </Link>
        ))}
      </C.Content>

      <C.Button onClick={handleShowMore}>
        <ArrowDown size={32} />
      </C.Button>
    </C.Container>
  );
};
