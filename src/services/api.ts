import axios from "axios";
import md5 from "md5";

const ts = Number(new Date());

const publicKey = "9bef221ea2c9e669f3457b628732f017";
const privateKey = "9284aa0ab2a2e5fb907b1e0b82cd3032d92420a7";

const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public",
  params: {
    ts,
    apikey: publicKey,
    hash,
  },
});

export default api;
