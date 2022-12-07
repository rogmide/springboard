import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

/*
Variable 
- item:
  - Holds the snacks or drink is going to be display on details
- cantFind
  - Hold the path that is going to be redirect if we cant find the Snack or Drink
*/

function GeneralMenuItems({ item, cantFind }) {
  const { id } = useParams();

  let drink = item.find((drink) => drink.id === id);
  if (!drink) return <Redirect to={cantFind} />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {drink.name}
          </CardTitle>
          <CardText className="font-italic">{drink.description}</CardText>
          <p>
            <b>Recipe:</b> {drink.recipe}
          </p>
          <p>
            <b>Serve:</b> {drink.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default GeneralMenuItems;
