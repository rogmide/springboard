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
    let res = {};

    for (let i = 0; i < this.words.length; i++) {
      if (!(this.words[i] in res)) {
        res[this.words[i]] = [this.words[i + 1]];
      } else {
        res[this.words[i]].push(this.words[i + 1] ? this.words[i + 1] : null);
      }
    }
    console.log(res);
    return res;
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
  }
}

const mm = new MarkovMachine("the cat in the hat is in the hat");
const mm2 = new MarkovMachine("in the hat is in the hat");
// const mm3 = new MarkovMachine(
//   "You are old,’ said the Dormouse, who was talking. Alice could only see her. She is such a new pair of white kid gloves and the blades of grass, but she remembered the number of bathing machines in the kitchen that did not like the wind, and was just beginning to grow up any more if you’d like it put the Dormouse again, so she went nearer to make out that it was certainly English. ‘I don’t quite understand you,’ she said, ‘for her hair goes in such confusion that she was looking down with it."
// );
