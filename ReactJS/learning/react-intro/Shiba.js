// const MovieList = () => {
//   return (
//     <ul>
//       <li>Amadeus</li>
//       <li>Alien</li>
//       <li>Arrival</li>
//       <li>Advanger</li>
//     </ul>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <h1>App Component!</h1>
//       <MovieList />
//     </div>
//   );
// };

// ReactDOM.render(<App />, document.getElementById("root"));

//https://www.akc.org/wp-content/uploads/2017/11/Shiba-Inu-puppy-standing-outdoors.jpg

//COMPONENT
const Shiba = () => {
  return (
    <img src="https://www.akc.org/wp-content/uploads/2017/11/Shiba-Inu-puppy-standing-outdoors.jpg" />
  );
};

ReactDOM.render(<Shiba />, document.getElementById("root"));
