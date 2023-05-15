import { useEffect, useState } from "react";

import md5 from "md5";

import { Header } from "../../layout/Header";
import * as C from "./styles";

import api from "../../services/api";
import { Characters } from "../../components/Characters";

const publicKey = "9bef221ea2c9e669f3457b628732f017";
const privateKey = "9284aa0ab2a2e5fb907b1e0b82cd3032d92420a7";

const time = Number(new Date());

const hash = md5(time + privateKey + publicKey);

interface Props {
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export const Home = () => {
  const [character, setCharacter] = useState<Props>([]);

  useEffect(() => {
    api
      .get(`/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`)
      .then((res) => {
        setCharacter(res.data.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <C.Container>
      <Header />

      <C.Content>
        {character.map((character) => (
          <Characters key={character.id} name={character.name} />
        ))}
      </C.Content>
    </C.Container>
  );
};
