import "./styles.scss";

import { Switch, Route } from "react-router-dom";

import PokemonList from "../pokemon-list";
import PokemonInfo from "../pokemon-info";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={PokemonList} />
        <Route path="/pokemon/:name" component={PokemonInfo} />
      </Switch>
    </div>
  );
};

export default App;
