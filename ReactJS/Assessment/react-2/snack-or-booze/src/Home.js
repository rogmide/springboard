import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
// import FoodMenu from "./FoodMenu";
// import DrinkMenu from "./DrinkMenu";
import GeneralMenu from "./GeneralMenu";

/*
Variable 
- snacks:
  - Holds the snacks that are pre-load or added to the app
- drinks
  - Holds the drinks that are pre-load or added to the app
*/

function Home({ snacks, drinks }) {
  return (
    <section className="col-md-8" style={{ marginTop: "-100px" }}>
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
        </CardBody>
      </Card>
      <div style={{ display: "Flex", justifyContent: "center" }}>
        {/* Old way of doing the app by cloning FoodMenu */}
        {/* <FoodMenu snacks={snacks} />
        <DrinkMenu drinks={drinks} /> */}

        {/* Render 2 GeneralMenu one with Snacks and the other one with Drinks */}
        <GeneralMenu items={snacks} foodType="snacks" />
        <GeneralMenu items={drinks} foodType="drinks" />
      </div>
    </section>
  );
}

export default Home;
