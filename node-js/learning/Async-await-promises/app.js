// console.log("this print 1s");

// setTimeout(() => {
//     console.log('this print 3s')
// }, 1000);

// console.log('this print 2s')

// let planet;

// ##############################################
//Nested Request Ummm We dont use this anymore :)
// ##############################################

// $.getJSON("https://swapi.dev/api/planets/1/", (response) => {
//   planet = response;
//   console.log("Done0", planet);

//   $.getJSON(planet.residents[0], (response) => {
//     residents = response;
//     console.log("Done1", residents);

//     $.getJSON(planet.films[0], (response) => {
//       films = response;
//       console.log("Done2", films);
//     });
//   });
// });

// ##############################################
// Promise, then() and catch() Controlls NO NESTING CATCH
// ##############################################

// let url = "https://swapi.dev/api/planets/1/";

// let ourPromise = axios
//   .get(url)
//   .then((resp) => {
//     console.log(resp.data.name);
//     axios
//       .get(resp.data.residents[0])
//       .then((res) => {
//         console.log(res.data.name);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((err) => console.log("Fail!!!", err));

// ##############################################
// Promise, then()++; and one Catch to help all the then()
// ##############################################
// let url = "https://swapi.dev/api/planets/1/";

// axios
//   .get(url)
//   .then((resp) => {
//     console.log(resp.data);
//     return axios.get(resp.data.residents[0]);
//   })
//   .then((resp) => {
//     console.log(resp.data);
//     return axios.get(resp.data.films[0]);
//   })
//   .then((resp) => {
//     console.log(resp.data);
//     return
//   })
//   // This Catch for for each .then() before the catch
//   .catch((err) => console.log("Fail!!!", err));

// ##############################################
// Sample of Axios, CREATING A NEW PROMISE
// ##############################################
// function wait3Seconds() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject();
//     }, 3000);
//   });
// }

// wait3Seconds()
//   .then(() => console.log("ALL DONE"))
//   .catch(() => console.log("Error"));

// let mockAjaxRequest = new Promise(function (resolve, reject) {
//   let probSuccess = 0.5;
//   let requestTime = 1000;

//   setTimeout(() => {
//     let randomNum = Math.random();
//     if (randomNum < probSuccess) {
//       let data = "Here's your datda";
//       resolve(data);
//     } else {
//       reject("Sorry request fail");
//     }
//   }, requestTime);
// });

// mockAjaxRequest
//   .then((data) => {
//     console.log(data);
//     return mockAjaxRequest;
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));


// let mockAjaxRequest = new Promise(function (resolve, reject) {
//   let probSuccess = 0.5;
//   let requestTime = 1000;

//   setTimeout(() => {
//     let randomNum = Math.random();
//     if (randomNum < probSuccess) {
//       let data = "Here's your datda";
//       resolve(data);
//     } else {
//       reject("Sorry request fail");
//     }
//   }, requestTime);
// });

// mockAjaxRequest
//   .then((data) => {
//     console.log(data);
//     return mockAjaxRequest;
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
