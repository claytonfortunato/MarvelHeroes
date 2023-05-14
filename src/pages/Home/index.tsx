import { useEffect, useState } from "react";

import md5 from "md5";

import { Header } from "../../layout/Header";
import * as C from "./styles";

import api from "../../services/api";

interface Props {
  name: string;
  description: string;
  thumbnail: string;
}

export const Home = () => {
  const [character, setCharacter] = useState<Props>([]);

  useEffect(() => {
    api
      .get(
        `/characters?ts=${time}&apikey=${process.env.REACT_APP_KEYPUBLIC}&hash=${hash}`
      )
      .then((res) => {
        console.log(res.data.data);
        setCharacter(res.data.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <C.Container>
      <Header />

      {character.map((character) => (
        <p>{character.name}</p>
      ))}
    </C.Container>
  );
};
