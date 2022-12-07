import React from "react";
import { Link } from "react-router-dom";
import "./GeneralMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

/*
Variable 
- items:
  - Holds snacks or drink that to be display on the Menu
- foodType
  - Hold the type of food to display can be Snacks or Drinks
*/

function GeneralMenu({ items, foodType }) {
  return (
    <section className="col-md-4" style={{ marginTop: "-100px" }}>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            <span style={{ textTransform: "capitalize" }}>{foodType}</span> Menu
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <ListGroup>
            {items.map((item) => (
              <Link to={`/${foodType}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default GeneralMenu;
