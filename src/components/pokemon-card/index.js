import "./styles.scss";

import { useRouteMatch } from "react-router-dom";

const PokemonCard = (props) => {
  const match = useRouteMatch();
  console.log(match);
  return (
    <div className="pokemon-card">
      <h3>{props.pokemon.name}</h3>
    </div>
  );
};

export default PokemonCard;
