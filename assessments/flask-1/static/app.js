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

    $('.loader').removeAttr('hidden');
    let res = await axios.get(`/conversions`);

    console.log(res);
  } catch (error) {
    console.log(error);
  }
});




let xArray = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
var yArray = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

// Define Data
let data = [
  {
    x: xArray,
    y: yArray,
    mode: "markers",
  },
];

// Define Layout
let layout = {
  xaxis: { range: [40, 160], title: "Square Meters" },
  yaxis: { range: [5, 16], title: "Price in Millions" },
  title: "House Prices vs. Size",
};

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);
