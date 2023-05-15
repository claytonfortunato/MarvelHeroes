import { useEffect, useState } from "react";

import { Header } from "../../layout/Header";
import { Characters } from "../../components/Characters";

import api from "../../services/api";

import { PropsData } from "../../@types/types";

import * as C from "./styles";

export const Home = () => {
  const [character, setCharacter] = useState<PropsData[]>([]);

  useEffect(() => {
    api
      .get(`/characters`)
      .then((res) => {
        setCharacter(res.data.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <C.Container>
      <Header />
    </C.Container>
  );
};
