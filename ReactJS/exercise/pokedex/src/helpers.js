// Return a Array with 2 Array - Dex1 and Dex2 holding random pokemons
const randPokemon = (poke_data) => {
  // Scramble Array
  poke_data.sort(() => 0.5 - Math.random());

  // Make 2 dexs from the Scramble Array poke_data
  const dex1 = poke_data.slice(4, poke_data.lenght);
  const dex2 = poke_data.slice(0, 4);
  return [dex1, dex2];
};

// Calculta Total EXP
const totalExp = (poke_data) => {
  const total = poke_data.reduce((acc, p) => {
    return acc + p.base_experience;
  }, 0);
  return total;
};

// eslint-disable-next-line
export { randPokemon, totalExp };
