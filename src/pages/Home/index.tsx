import { useEffect, useState } from "react";

import { Characters } from "../../components/Characters";

import api from "../../services/api";

import { PropsData } from "../../@types/types";

import * as C from "./styles";

export const Home = () => {
  const [character, setCharacter] = useState<PropsData[]>([]);

  useEffect(() => {
    api
      .get(`/comics?startYear=2021`)
      .then((res) => {
        setCharacter(res.data.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <C.Container>
      <C.ContentCarousel>
        <C.HeaderCarousel>Start Year 2021</C.HeaderCarousel>

        <C.BoxChar>
          {character.map((character) => (
            <div className="box">
              <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt=""
              />
              <p>{character.title}</p>
            </div>
          ))}
        </C.BoxChar>
      </C.ContentCarousel>
    </C.Container>
  );
};
