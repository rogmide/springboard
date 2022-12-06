import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";

import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
// import Menu from "./FoodMenu";
// import Snack from "./FoodItem";
// import Drink from "./DrinkMenu";
import GeneralMenuItems from "./GeneralMenuItems";
import GeneralMenu from "./GeneralMenu";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacks();

    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      setIsLoading(false);
    }
    getDrinks();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            <Route exact path="/snacks">
              <GeneralMenu items={snacks} title="Snacks" foodType="snacks" />
            </Route>
            <Route path="/snacks/:id">
              <GeneralMenuItems items={snacks} cantFind="/snacks" />
            </Route>
            <Route exact path="/drinks">
              <GeneralMenu items={drinks} title="Drinks" foodType="drinks" />
            </Route>
            <Route path="/drinks/:id">
              <GeneralMenuItems items={drinks} cantFind="/drinks" />
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
