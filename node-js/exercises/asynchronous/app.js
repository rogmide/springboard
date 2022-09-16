// #########################################################################
// Random Numbers to Show facts
// #########################################################################
promNumbers = [];
for (let i = 0; i < 4; i++) {
  promNumbers.push(
    axios.get(`http://numbersapi.com/${Math.round(Math.random() * 100)}`)
  );
}
$numbers = $("#numbers");
$btn_gimme_card = $("#btn_gimme_card");
$card_holder = $("#card_holder");

promNumbers.forEach((resp) => {
  resp.then((res) => $numbers.append(`<li>${res.data}</li>`));
  $numbers.addClass("list-group-item");
  resp.catch((err) => console.log(err.message));
});

// #########################################################################
// End of Random Numbers to Show facts
// #########################################################################

// #########################################################################
// Deck of Cards Draw
// #########################################################################

deck_id = "new";

$btn_gimme_card.on("click", function () {
  card = axios.get(
    `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
  );

  let angle = Math.random() * 360;

  card.then((resp) => console.log(resp.data));
  card.then((resp) => {
    if (resp.data.remaining != 0) {
      $card_holder.append(`
          <img 
            src="${resp.data.cards[0].image}" 
            alt="Card Img"
            style=" transform: rotate(${angle}deg);"
            >                       
          </img>`);

      deck_id = resp.data.deck_id;
    } else {
      $card_holder.empty();
      deck_id = "new";
      alert("New Deck is About to Start!!!");
    }
  });
  card.catch((err) => console.log(err));
});

// #########################################################################
// End of Deck of Cards Draw
// #########################################################################
