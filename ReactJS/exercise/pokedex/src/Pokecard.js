const Pokecard = ({ pokemon }) => {
  return (
    <div>
      <h3>{pokemon.name}</h3>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png`}
      />
      <p>Type: {pokemon.type}</p>
      <p>EXP: {pokemon.base_experience}</p>
    </div>
  );
};

export default Pokecard;
