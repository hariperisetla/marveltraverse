import Head from "next/head";

import { fetchHeroes } from "../utils/fetch";
import { useState } from "react";

import { MD5 } from "crypto-js";
import Image from "next/image";

export const getStaticProps = async () => {
  const apiUrl = process.env.BASE_URL;
  const apiKey = process.env.API_KEY;
  const privateKey = process.env.PRIVATE_API_KEY;

  const getHash = (ts, secretKey, publicKey) => {
    return MD5(ts + secretKey + publicKey);
  };

  let value = "hulk";

  let baseUrl = `${apiUrl}/v1/public/characters`;

  let ts = Date.now().toString();
  let hash = getHash(ts, privateKey, apiKey);

  // let url = `${baseUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${value}`;
  let url = `${baseUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}`;

  let res = await fetch(url);

  let heroes = await res.json();

  return {
    props: {
      heroes,
    },

    revalidate: 86400,
  };
};

export default function Home({ heroes }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container pt-24 mx-auto">
        {console.log(heroes.data.results)}
        <div className="grid grid-cols-6 gap-5">
          {heroes.data.results.map((hero) => (
            <div key={hero.id} className="bg-gray-400 p-3">
              <div className="w-full h-64 relative">
                <Image
                  alt={hero.name}
                  src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                  layout="fill"
                  className="object-top object-cover w-10"
                />
              </div>
              <h1 className="text-2xl capitalize">{hero.name}</h1>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
