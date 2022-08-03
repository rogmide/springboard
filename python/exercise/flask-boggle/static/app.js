$("#submit_word").on("click", async function (e) {
  e.preventDefault();
  check_for_word();
});

async function check_for_word() {
  try {
    let word = $("#work_quess").val();
    let res = await axios.get(`/check_word/` + word);

    if (res.data.result === 'not-word'){
        $('.is_a_word').text(`Sorry ${word} is not a word!`)
    }
    if (res.data.result === 'ok'){
        $('.is_a_word').text(`Ding! Ding! Ding! ${word} is on the Board!`)
    }
    if (res.data.result === 'not-on-board'){
        $('.is_a_word').text(`${word} is a word, but is not in the Board`)
    }

  } catch (error) {
    console.log(error);
  }
}
