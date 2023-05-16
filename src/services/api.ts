import axios from "axios";
import md5 from "md5";

const ts = Number(new Date());

const ApiKey = import.meta.env.VITE_KEYPUBLIC;

const privateKey = import.meta.env.VITE_APP_KEYPRIVATE;

const hash = md5(ts + privateKey + ApiKey);

const api = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public",
  params: {
    ts,
    apikey: ApiKey,
    hash,
  },
});

export default api;
