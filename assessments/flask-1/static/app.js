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
