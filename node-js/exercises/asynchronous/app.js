// #########################################################################
// DOM Manipulation Variables
// #########################################################################

$btn_catch_pokemon = $("#btn_catch_pokemon");
$numbers = $("#numbers");
$btn_gimme_card = $("#btn_gimme_card");
$card_holder = $("#card_holder");
$pokemon_holder = $("#pokemon_holder");

// #########################################################################
// Random Numbers to Show facts
// #########################################################################
// promNumbers = [];
// for (let i = 0; i < 4; i++) {
//   promNumbers.push(
//     axios.get(`http://numbersapi.com/${Math.round(Math.random() * 100)}`)
//   );
// }

// promNumbers.forEach((resp) => {
//   resp.then((res) => $numbers.append(`<li>${res.data}</li>`));
//   $numbers.addClass("list-group-item");
//   resp.catch((err) => console.log(err.message));
// });

// #########################################################################
// Random Numbers ASYNC AWAIT
// #########################################################################

async function getNUmbers() {
  for (let i = 0; i < 4; i++) {
    let res = await axios.get(
      `http://numbersapi.com/${Math.round(Math.random() * 100)}`
    );
    $numbers.append(`<li>${res.data}</li>`);
    $numbers.addClass("list-group-item");
  }
}

getNUmbers();

// #########################################################################
// End of Random Numbers to Show facts
// #########################################################################

// #########################################################################
// Deck of Cards Draw
// #########################################################################

deck_id = "new";

// $btn_gimme_card.on("click", function () {
//   card = axios.get(
//     `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
//   );

//   let angle = Math.random() * 360;

//   // card.then((resp) => console.log(resp.data));
//   card.then((resp) => {
//     if (resp.data.remaining != 0) {
//       $card_holder.append(`
//           <img
//             src="${resp.data.cards[0].image}"
//             alt="Card Img"
//             style=" transform: rotate(${angle}deg);"
//             >
//           </img>`);

//       deck_id = resp.data.deck_id;
//     } else {
//       $card_holder.empty();
//       deck_id = "new";
//       alert("New Deck is About to Start!!!");
//     }
//   });
//   card.catch((err) => console.log(err));
// });

// #########################################################################
// Deck of Cards ASYNC AWAIT
// #########################################################################

$btn_gimme_card.on("click", async function () {
  let card = await axios.get(
    `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
  );

  let angle = Math.random() * 360;

  if (card.data.remaining != 0) {
    $card_holder.append(`
              <img
                src="${card.data.cards[0].image}"
                alt="Card Img"
                style=" transform: rotate(${angle}deg);"
                >
              </img>`);

    deck_id = card.data.deck_id;
  } else {
    $card_holder.empty();
    deck_id = "new";
    alert("New Deck is About to Start!!!");
  }
});

// #########################################################################
// End of Deck of Cards Draw
// #########################################################################

// #########################################################################
// Star of Pokemon Request to API
// #########################################################################

// let poke_name = "";
// let poke_img = "";
// let description = "";

// $btn_catch_pokemon.on("click", function (e) {
//   card = axios.get(
//     `https://pokeapi.co/api/v2/pokemon/${Math.round(Math.random() * 100)}/`
//   );

//   card
//     .then((resp) => {
//       // console.log(resp);
//       poke_name = resp.data.name;
//       poke_img = resp.data.sprites.front_default;
//       console.log(resp);
//       return axios.get(resp.data.species.url);
//     })
//     .then((resp) => {
//       eng_description = resp.data.flavor_text_entries.filter(
//         (t) => t.language.name === "en"
//       );
//       description =
//         eng_description[Math.round(Math.random() * eng_description.length)]
//           .flavor_text;
//     })
//     .then(() => {
//       $pokemon_holder.children().length >= 3
//         ? $pokemon_holder.empty()
//         : $pokemon_holder.append(`
//       <div class="card" style="width: 18rem;">
//         <img id="poke_img" src="${poke_img}" class="card-img-top" alt="Pokemon Img">
//         <div class="card-body">
//         <h5 class="card-title">${poke_name}</h5>
//         <p class="card-text">${description}</p>
//         </div>
//       </div>`);
//     })
//     .catch((err) => console.log(err));
// });

// #########################################################################
// Star of Pokemon Request to API ASYNC AWAIT VERSION
// #########################################################################

let poke_name = "";
let poke_img = "";
let description = "";

$btn_catch_pokemon.on("click", async function (e) {
  poke = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${Math.round(Math.random() * 100)}/`
  );

  poke_name = poke.data.name;
  poke_img = poke.data.sprites.front_default;

  // #########################################################################
  // more_info is another axios request to get the flavore text from that request
  more_info = await axios.get(poke.data.species.url);

  // #########################################################################
  // The flavor text responst in on multiple languages so i have to filter
  // english only
  eng_description = more_info.data.flavor_text_entries.filter(
    (t) => t.language.name === "en"
  );
  description =
    eng_description[Math.round(Math.random() * eng_description.length)]
      .flavor_text;

  $pokemon_holder.children().length >= 3
    ? $pokemon_holder.empty()
    : $pokemon_holder.append(`
      <div class="card" style="width: 18rem;">
          <img id="poke_img" src="${poke_img}" class="card-img-top" alt="Pokemon Img">
        <div class="card-body">
          <h5 class="card-title">${poke_name}</h5>
          <p class="card-text">${description}</p>
        </div>
      </div>`);
});

// #########################################################################
// End of Pokemon Request to API
// #########################################################################
