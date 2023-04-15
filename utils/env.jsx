import React from "react";

const Env = () => {
  const apiUrl = process.env.BASE_URL;
  const apiKey = process.env.API_KEY;
  const privateKey = process.env.PRIVATE_API_KEY;

  return { apiUrl, apiKey, privateKey };
};

export default Env;
