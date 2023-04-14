import { MD5 } from "crypto-js";

const getHash = (ts, secretKey, publicKey) => {
  return MD5(ts + secretKey + publicKey);
};

const fetchHeroes = async (value, apiUrl, apiKey, privateKey) => {
  let baseUrl = `${apiUrl}/v1/public/characters`;

  let ts = Date.now().toString();
  let hash = getHash(ts, privateKey, apiKey);

  let url = `${baseUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${value}`;

  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    return;
  }
};

export { fetchHeroes };
