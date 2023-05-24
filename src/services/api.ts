import axios from "axios";
import md5 from "md5";

const ts = Number(new Date());

import config from "../config";

const hash = md5(ts + config.keyPrivate + config.apiKey);

const api = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public",
  params: {
    ts,
    apikey: config.apiKey,
    hash,
  },
});

export default api;
