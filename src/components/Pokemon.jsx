import Type from "./Type";

function Pokemon(props) {
  return (
    <div className="pokemon-card">
      <h1>{props.name}</h1>
      <img src={props.img} alt="pokemon" />
      {props.type.map((type) => {
        return <Type key={type} type={type} />;
      })}
    </div>
  );
}

export default Pokemon;
