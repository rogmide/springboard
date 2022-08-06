$("#select_from").change((e) => {
  $("#from").val($("#select_from").val());
});
$("#select_to").change((e) => {
  $("#to").val($("#select_to").val());
});

$("#from").focusout((e) => {
  $("#select_from").val($("#from").val().toUpperCase());
});

$("#to").focusout((e) => {
  $("#select_to").val($("#to").val().toUpperCase());
});

$("#convert").click(async (e) => {
  if (
    $("#from").val() === "" ||
    $("#from").val().length != 3 ||
    $("#to").val() === "" ||
    $("#to").val().length != 3 ||
    $("#amount").val() === ""
  ) {
    return;
  }

  try {
    let res = await axios.get(`/conversions`);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
});
