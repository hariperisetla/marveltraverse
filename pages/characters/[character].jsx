import React from "react";
import { fetchHeroes } from "../../utils/fetch";
import Image from "next/image";
import Link from "next/link";

export const getServerSideProps = async ({ query }) => {
  const apiUrl = process.env.BASE_URL;
  const apiKey = process.env.API_KEY;
  const privateKey = process.env.PRIVATE_API_KEY;

  let url = await fetchHeroes(
    `/v1/public/characters/${query.character}`,
    apiUrl,
    apiKey,
    privateKey
  );

  const res = await fetch(url);

  const hero = await res.json();

  //   console.log(hero);
  //   res.setHeader(
  //     "Cache-Control",
  //     "public, s-maxage=10, stale-while-revalidate=86400"
  //   );

  return {
    props: {
      hero,
    },
  };
};

const Character = ({ hero }) => {
  console.log(hero);
  return (
    <main className="container pt-24 px-52 mx-auto">
      {hero.data.results.map((hero) => (
        <div key={hero.id} className="grid grid-cols-3 bg-white shadow p-5">
          <div className="">
            <div className="w-72 h-72 relative">
              <Image
                alt={hero.name}
                src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                layout="fill"
                className="object-cover object-top"
              />
            </div>
            <h1 className="text-3xl font-robotoCondensed font-bold uppercase">
              {hero.name}
            </h1>
          </div>

          <div className="col-span-2">
            <h4>{hero.description}</h4>
            <p>Comics</p>
            {hero.comics.items.map((comic) => (
              <div key={comic.name}>
                <Link href={comic.resourceURI}>
                  <h1>{comic.name}</h1>
                </Link>
              </div>
            ))}
            <p>Series</p>
            <p>Stories</p>
            <p>Events</p>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Character;
