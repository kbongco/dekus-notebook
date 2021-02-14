import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal'

export default function Hero(props) {
  const { proHeroes } = props;
  console.log(props);

  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  }

  const hideModal = () => {
    setIsOpen(false);
  }

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
              <Button variant="primary" onClick={showModal}>More Information</Button>
            </Card.Body>
          </Card>
        ))}
      </CardDeck>

      {proHeroes.map((proHero) => (
        <Modal show={isOpen}>
          <Modal.Header closeButton>
            <Modal.Title>{proHero.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{proHero.description}</p>
          </Modal.Body>
        </Modal>
      ))}

    </div>
  );
}
