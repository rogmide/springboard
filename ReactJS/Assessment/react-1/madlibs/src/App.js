import "./App.css";
import Madlib from "./madlib";

/**
 * To Add More Story Use This Format, and added to ./data/madlibsDB
 * 
 * {
    title: "TITLE",
    words: ["WORD1", "WORD2", "WORD3"],
    text: `STORY THAT (WORD1) LIFE LIKE (WORD2) AND EAT (WORD3)`,
  }, 
 * 
 */
function App() {
  return (
    <div className="App">
      <Madlib />
    </div>
  );
}

export default App;
