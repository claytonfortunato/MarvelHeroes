export default {
  apiUrl:
    import.meta.env.VITE_APP_API || "https://gateway.marvel.com:443/v1/public",
  apiKey:
    import.meta.env.VITE_APP_KEYPUBLIC || "9bef221ea2c9e669f3457b628732f017",
  keyPrivate:
    import.meta.env.VITE_APP_KEYPRIVATE ||
    "9284aa0ab2a2e5fb907b1e0b82cd3032d92420a7",
};
