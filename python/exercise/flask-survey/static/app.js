let text_why = "";

$("#id_why").blur(function (e) {
  e.preventDefault();
  $(".multi-option").each(function () {
    $(this).attr("action", $(this).attr("action") + $("#id_why").val());
  });
});
