import React from 'react';
import Green from './imgs/green-cat.jpeg';
import Orange from './imgs/orange.jpeg';
import Chi from './imgs/chi.jpeg';
import Scratch from './imgs/scratch.jpeg';
import { CardDeck, Card, Button } from 'react-bootstrap';
import { Contact } from '../home/home_components/Contact';


export const Surrender = () => (
    <div style ={{marginTop: "70px"}}>
        <Card className="bg-dark text-white">
  <Card.Img src= { Green } alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title id="end">Surrender Services</Card.Title>
    <Card.Text id="surrender-text">
    When you can no longer care for your pet
    </Card.Text>
    <Card.Text id="resources-text"></Card.Text>
  </Card.ImgOverlay>
</Card>
<CardDeck>
  <Card>
    <Card.Img variant="top" src={ Chi } fluid/>
    <Card.Body>
      <Card.Title>Lorem Ipsum</Card.Title>
      <Card.Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      <br></br>
     
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={ Scratch }/>
    <Card.Body>
      <Card.Title>Lorem Ipsum</Card.Title>
      <Card.Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      <br></br>
 
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={ Orange }/>
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
    <Card.Title>Surrender Appointments</Card.Title>
    <Card.Text>
    Schedule a pet drop off time with our staff
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