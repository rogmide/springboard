/** Textual markov chain generator */

class MarkovMachine {
  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter((c) => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    let chains = {};

    for (let i = 0; i < this.words.length; i++) {
      if (!(this.words[i] in chains)) {
        chains[this.words[i]] = [this.words[i + 1] || null];
      } else {
        chains[this.words[i]].push(this.words[i + 1] || null);
      }
    }
    this.chains = chains;
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO

    let keys = Object.keys(this.chains);
    let output = [];
    let val = "";
    while (output.length < numWords) {
      let key = keys[Math.floor(Math.random() * keys.length)];
      val =
        this.chains[key][Math.floor(Math.random() * this.chains[key].length)];
      if (val === null) {
        break;
      }
      output.push(val);
    }
    return output.join(" ");
  }
}

// const mm2 = new MarkovMachine("Some Can Love This Happen Hate");
// console.log(mm2.chains);
// console.log(mm2.makeText(10));

module.exports = MarkovMachine;

