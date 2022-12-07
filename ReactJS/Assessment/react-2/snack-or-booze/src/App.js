import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";

import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";

// ########################
// This is the Clone solution that we not using anymore
// ########################
// import Menu from "./FoodMenu";
// import Snack from "./FoodItem";
// import Drink from "./DrinkMenu";

// ########################
// GeneralMenuItems
// GeneralMenu
// They do the same that Snack and Drink was doing but now they get a extra props foodType
// to controle what type of menu is going to show Food or Drink
// ########################
import GeneralMenuItems from "./GeneralMenuItems";
import GeneralMenu from "./GeneralMenu";
import Error404 from "./404";

// ########################
// NewFoodDrinkForm
// Is the form to add new Snacks and Drinks to the menu
// ########################
import NewFoodDrinkForm from "./NewFoodDrinkForm";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  // ########################
  // Pre-Load Snacks and Drinks that are going to be use on the App
  // ########################
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

  // ########################
  // addItem will update state of Snacks or Drinks
  // This function will be pass as props to the child component to update Snacks of Drinks
  // ########################
  const addItem = (newItem) => {
    newItem.foodType === "Food"
      ? setSnacks((snacks) => [...snacks, { ...newItem, id: newItem.name }])
      : setDrinks((drinks) => [...drinks, { ...newItem, id: newItem.name }]);
  };

  return (
    <div className="App">
      {/* All the Routes that we using on the App */}
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
            <Route path="/new_food_drink_form">
              <NewFoodDrinkForm addItem={addItem} />
            </Route>
            {/* No Matching any of the routes before this one will redirect to 404 page */}
            <Route path="*">
              <Error404 />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
