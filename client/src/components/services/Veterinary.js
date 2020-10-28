import React from 'react';
import CatVet from './imgs/cat-vet.jpeg';
import Jaws from './imgs/jaws.jpeg';
import DogPaw from './imgs/dog-paw.jpeg';
import Gloves from './imgs/gloves.jpeg';
import { CardDeck, Card, Button } from 'react-bootstrap';
import { Contact } from '../home/home_components/Contact';


export const Veterinary = () => (
  <div style ={{marginTop: "70px"}}>
        <Card className="bg-dark text-white">
  <Card.Img src= { Gloves } alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title id="end">Veterinary Services</Card.Title>
    <Card.Text id="vet-text">
      Keeping your pet healthy is our priority
    </Card.Text>
    <Card.Text id="resources-text"></Card.Text>
  </Card.ImgOverlay>
</Card>
<CardDeck>
  <Card>
    <Card.Img variant="top" src={ CatVet } fluid/>
    <Card.Body>
      <Card.Title>Lorem Ipsum</Card.Title>
      <Card.Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      <br></br>
     
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={ DogPaw }/>
    <Card.Body>
      <Card.Title>Lorem Ipsum</Card.Title>
      <Card.Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      <br></br>
 
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={ Jaws }/>
    <Card.Body>
      <Card.Title>Lorem Ipsum</Card.Title>
      <Card.Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
<Card className="text-center">
  <Card.Header></Card.Header>
  <Card.Body>
    <Card.Title>Veterinary Appointments</Card.Title>
    <Card.Text>
    Make an appointment with one of our amazing veterinarians
    <Card.Img variant="top" src=''/>
    </Card.Text>
    <Button variant="primary">Make an Appointment</Button>
  </Card.Body>
  <Card.Footer className="text-muted"></Card.Footer>
</Card>
  <br></br>
  <br></br>

  {/* Contact Info */}
<Contact></Contact>

    </div>
    )