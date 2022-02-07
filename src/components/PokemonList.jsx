import Pokemon from "./Pokemon";

function PokemonList(props) {
  return (
    <div className="pokemon-list">
      {props.pokemons.map((pokemon) => {
        return (
          <Pokemon
            key={pokemon.id}
            name={pokemon.name}
            img={pokemon.img}
            type={pokemon.type}
          />
        );
      })}
    </div>
  );
}

export default PokemonList;
