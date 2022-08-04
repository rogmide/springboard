keeping_track_score();

let words = [];

$("#submit_word").on("click", async function (e) {
  e.preventDefault();
  check_for_word();
});

$("#myModal").on("hidden.bs.modal", function (e) {
  $("#work_quess").focus();
  $("#work_quess").val("");
  keeping_time();
});

//Timer to keep the game going for 1min
setTimeout(() => {
  $(".is_a_word").text(`Time is Over!`);
  $("#myModal").modal("toggle");
  $("#work_quess").prop("disabled", true);
  $("#submit_word").prop("disabled", true);
  keeping_track_score();
}, 60000);

//Check for a Work sending a reques to the back end
async function check_for_word() {
  try {
    if ($("#work_quess").val().length < 3) {
      $(".is_a_word").text(`Word need to be 3 char or more!`);
      $("#myModal").modal("toggle");
      return;
    }
    let word = $("#work_quess").val();
    //the request to the back end
    let res = await axios.get(`/check_word/` + word);

    if (res.data.result === "not-word") {
      $(".is_a_word").text(`Sorry ${word} is not a word!`);
      $("#myModal").modal("toggle");
    }
    if (res.data.result === "ok") {
      if ($.inArray($("#work_quess").val(), words) === -1) {
        console.log("somethings");
        $(".is_a_word").text(`Ding! Ding! Ding! ${word} is on the Board!`);
        $("#myModal").modal("toggle");

        //Score the player for the word guess
        if ($(".score").text()) {
          let temp = $(".score").text();
          temp = parseInt(temp);
          $(".score").text((temp += $("#work_quess").val().length));

          words.push($("#work_quess").val());
        }
      } else {
        $(".red").text(`You say ${word} already!`);
        setInterval(() => {
          $(".red").text(``);
        }, 3000);
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

//Send a request to the back end to keep the score in a session updated
async function keeping_track_score() {
  try {
    let json_data = JSON.stringify({
      score: $(".score").text(),
      time: $(".time").text(),
    });

    let res = await axios.post(`/keep_score/`, json_data);

    if (res.data.result === "new") {
      $(".best_score").text(res.data.higher_score);
    } else {
      $(".best_score").text(res.data.higher_score);
    }
  } catch (error) {
    console.log(error);
  }
}

//control how many time the user play(try) a word
function keeping_time() {
  if ($(".is_a_word").text() !== `Time is Over!`) {
    let temp = $(".time").text();
    temp = parseInt(temp);
    $(".time").text((temp += 1));
  }
}
