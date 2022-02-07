import pokemons from "./pokedex.json";
import PokemonList from "./components/PokemonList";
import SearchForm from "./components/SearchForm";

function App() {
  const first50El = pokemons.pokemon.slice(0, 50);
  return (
    <div className="App">
      <SearchForm />
      <PokemonList pokemons={first50El} />;
    </div>
  );
}

export default App;
