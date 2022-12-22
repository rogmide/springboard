const h1 = document.querySelector("h1");
const incButton = document.querySelector("#increment");
const decButton = document.querySelector("#decrement");
const resetButton = document.querySelector("#reset");
const doubleBTN = document.querySelector("#doble");

incButton.addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT" });
  const state = store.getState();
  h1.innerText = state.count;
});

decButton.addEventListener("click", () => {
  store.dispatch({ type: "DECREMENT" });
  const state = store.getState();
  h1.innerText = state.count;
});

resetButton.addEventListener("click", () => {
  store.dispatch({ type: "RESET" });
  const state = store.getState();
  h1.innerText = state.count;
});

doubleBTN.addEventListener("click", () => {
  store.dispatch({ type: "MULTIPLY", payload: 2 });
  const state = store.getState();
  h1.innerText = state.count;
});
