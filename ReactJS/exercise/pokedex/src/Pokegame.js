import "./Pokegame.css";
import { randPokemon, totalExp } from "./helpers";
import pokemon_data from "./pokemon_data";
import Pokedex from "./Pokedex";
import "./Pokegame.css";

const Pokegame = () => {
  let teams = randPokemon(pokemon_data);
  let team1EXP = totalExp(teams[0]);
  let team2EXP = totalExp(teams[1]);
  let winner = "";
  if (team1EXP > team2EXP) {
    winner = "Team 1";
  } else {
    winner = "Team 2";
  }
  return (
    // Main Game
    <div>
      <h1>Game</h1>
      <h3 style={{ color: "blue" }}>
        The Winner is: {winner} with {Math.max(team1EXP, team2EXP)} total EXP!!!
      </h3>
      <div>
        {/* dex1 */}
        <h2>Team 1</h2>
        <p>Total EXP: {team1EXP}</p>
        <Pokedex key="pokede_1" data={teams[0]} />
      </div>
      <div>
        {/* dex2 */}
        <h2>Team 2</h2>
        <p>Total EXP: {team2EXP}</p>
        <Pokedex key="pokede_2" data={teams[1]} />
      </div>
    </div>
  );
};

export default Pokegame;
