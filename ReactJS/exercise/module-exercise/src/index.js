import foods from "./foods";
import { choice, remove } from "./helpers";

let rand = choice(foods);
console.log(`I’d like one ${rand}, please.`);
console.log(`Here you go:  ${rand}`);
console.log(`Delicious! May I have another`);

remove(foods, rand);
console.log(`I'm sorry, we're all out. We have ${foods.length} left.`);
