import "./styles.scss";

import { useEffect, useState } from "react";

import PokemonCard from "../../components/pokemon-card";

const PokemonList = () => {
  const [data, setData] = useState();
  const url = "https://pokeapi.co/api/v2/pokemon";

  const initData = async () => {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    setData(json);
  };

  useEffect(() => {
    initData();
  }, []);

  return (
    <div className="pokemon-list">
      {data?.results.map((pokemon) => {
        return <PokemonCard pokemon={pokemon} />;
      })}
    </div>
  );
};

export default PokemonList;
