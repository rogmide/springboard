$("#submit_word").on("click", async function (e) {
  e.preventDefault();
  check_for_word();
  $("#work_quess").val("");
});

setTimeout(() => {
  $(".is_a_word").text(`Time is Over!`);
  $("#myModal").modal("toggle");
  $("#work_quess").prop("disabled", true);
  $("#submit_word").prop("disabled", true);
}, 60000);

async function check_for_word() {
  try {
    if ($("#work_quess").val().length < 3) {
      $(".is_a_word").text(`Word need to be 3 char or more!`);
      $("#myModal").modal("toggle");
      return;
    }
    let word = $("#work_quess").val();
    let res = await axios.get(`/check_word/` + word);

    if (res.data.result === "not-word") {
      $(".is_a_word").text(`Sorry ${word} is not a word!`);
      $("#myModal").modal("toggle");
    }
    if (res.data.result === "ok") {
      $(".is_a_word").text(`Ding! Ding! Ding! ${word} is on the Board!`);
      $("#myModal").modal("toggle");

      //Score the player for the word guess
      if ($(".score").text()) {
        let temp = $(".score").text();
        temp = parseInt(temp);
        $(".score").text((temp += $("#work_quess").val().length));
        keeping_track_score();
      }
    }
    if (res.data.result === "not-on-board") {
      $(".is_a_word").text(`${word} is a word, but is not in the Board`);
      $("#myModal").modal("toggle");
    }
  } catch (error) {
    console.log(error);
  }
}

async function keeping_track_score() {
  try {
    let json_data = JSON.stringify({
      score: $(".score").text(),
      time: $(".time").text(),
    });

    let res = await axios.post(`/keep_score/`, json_data);
  } catch (error) {}
}
