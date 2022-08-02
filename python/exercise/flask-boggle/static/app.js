$("#submit_word").on("click", async function (e) {
  e.preventDefault();
  check_for_word();
});

async function check_for_word() {
  try {
    let word = $("#work_quess").val();
    let res = await axios.get(`/check_word/` + word);
    //Work with the result that coming
  } catch (error) {
    console.log(error);
  }
}
