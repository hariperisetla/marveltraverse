import { MD5 } from "crypto-js";

const getHash = (ts, secretKey, publicKey) => {
  return MD5(ts + secretKey + publicKey);
};

const fetchHeroes = (retrieveUrl, apiUrl, apiKey, privateKey) => {
  const getHash = (ts, secretKey, publicKey) => {
    return MD5(ts + secretKey + publicKey);
  };

  let baseUrl = `${apiUrl}${retrieveUrl}`;

  let ts = Date.now().toString();
  let hash = getHash(ts, privateKey, apiKey);

  // let url = `${baseUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${value}`;
  let url = `${baseUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}`;

  return url;
};

export { fetchHeroes };
