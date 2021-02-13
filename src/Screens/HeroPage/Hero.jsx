import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";

export default function Hero(props) {
  const { proHeroes } = props;
  console.log(props);
  return (
    <div className="all-students">
      <h1>Heroes </h1>
      <CardDeck>
        {proHeroes.map((proHero) => (
          <Card border="info" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              className="hero-cards"
              src={proHero.images[0]}
            />
            <Card.Body>
              <Card.Title>{proHero.name}</Card.Title>
              <Card.Text>{proHero.quirk}</Card.Text>
              <Button variant="primary">More Information</Button>
            </Card.Body>
          </Card>
        ))}
      </CardDeck>
    </div>
  );
}
