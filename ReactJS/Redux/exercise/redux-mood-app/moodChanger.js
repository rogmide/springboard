const h1 = document.querySelector("h1");
const happyBTN = document.querySelector("#happy");
const sadBTN = document.querySelector("#sad");
const cryBTN = document.querySelector("#cry");
const cuteBTN = document.querySelector("#cute");

happyBTN.addEventListener("click", () => {
  store.dispatch({ type: "CHANGE_MOOD", payload: "ʘ‿ʘ" });
  const state = store.getState();
  h1.innerText = state.mood;
});

sadBTN.addEventListener("click", () => {
  store.dispatch({ type: "CHANGE_MOOD", payload: "⊙︿⊙" });
  const state = store.getState();
  h1.innerText = state.mood;
});

cryBTN.addEventListener("click", () => {
  store.dispatch({ type: "CHANGE_MOOD", payload: "(ಥ◡ಥ)" });
  const state = store.getState();
  h1.innerText = state.mood;
});

cuteBTN.addEventListener("click", () => {
  store.dispatch({ type: "CHANGE_MOOD", payload: "^ↀᴥↀ^" });
  const state = store.getState();
  h1.innerText = state.mood;
});
