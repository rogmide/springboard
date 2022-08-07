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
    $(".loader").removeAttr("hidden");
    let res = await axios.get(`/conversions`);
  } catch (error) {
    console.log(error);
  }
});

function build_chart() {

    

  try {
    const currency_story = JSON.parse(result_six_month);
    console.log(currency_story)
    $('.c_from_symbol').text(currency_story["6"][1])
    $('.c_to_symbol').text(currency_story["7"][1])

    let xArray = [
      currency_story["5"][0],
      currency_story["4"][0],
      currency_story["3"][0],
      currency_story["2"][0],
      currency_story["1"][0],
      currency_story["0"][0],
    ];
    let yArray = [
      currency_story["5"][1],
      currency_story["4"][1],
      currency_story["3"][1],
      currency_story["2"][1],
      currency_story["1"][1],
      currency_story["0"][1],
    ];

    // Define Data
    let data = [
      {
        x: xArray,
        y: yArray,
        mode: "line",
      },
    ];

    // Define Layout
    let layout = {
      xaxis: {
        range: [40, 80, 90],
        title: "Base on 50" + " " + $(".get_from").text(),
      },
      yaxis: {
        range: [0, 50, 100, 150, 200],
        title: $(".get_too").text(),
      },
      title: "Currency change in the last 180 days",
    };

    // Display using Plotly
    Plotly.newPlot("myPlot", data, layout);
  } catch (error) {}
}

build_chart();
