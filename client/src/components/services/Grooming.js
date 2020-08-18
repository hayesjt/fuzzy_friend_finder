import React from 'react';
import Bowtie from './imgs/bowtie.jpeg';
import Banner from './imgs/banner.jpeg';
import Bubble from './imgs/bubble.jpeg';
import Spray from './imgs/spray.jpeg';
import Towel from './imgs/towel.jpeg';
import { CardDeck, Card, Button } from 'react-bootstrap';
import { Contact } from '../home/home_components/Contact';

export const Grooming = () => (
    <div>
        <Card className="bg-dark text-white">
  <Card.Img src={ Bowtie } alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title id="end">Grooming Services</Card.Title>
    <Card.Text id="end-text">
      Essential care for a healthy life
    </Card.Text>
    <Card.Text id="resources-text">Keep your pet squeaky clean</Card.Text>
  </Card.ImgOverlay>
</Card>
<CardDeck>
  <Card>
    <Card.Img variant="top" src={ Bubble } fluid/>
    <Card.Body>
      <Card.Title>Full-Service Bath</Card.Title>
      <Card.Text>
      Includes...
      <ul>
          <li>Gentle shampoo</li>
          <li>Blow-dry</li>
          <li>Ear cleaning</li>
          <li>Gland expression</li>
          <li>15-min brushout</li>
          <li>Scented spritz</li>
      </ul>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={ Towel }/>
    <Card.Body>
      <Card.Title>Grooming</Card.Title>
      <Card.Text>
          Includes...
      <ul>
          <li>Bath</li>
          <li>Blow dry</li>
          <li>Brush out</li>
          <li>Hair cut</li>
          <li>Nail trim</li>
          <li>Ear cleaning</li>
          <li>Tooth brushing</li>
      </ul>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={ Spray }/>
    <Card.Body>
      <Card.Title>Upgrades</Card.Title>
      <Card.Text>
      <ul>
          <li>Nail buffing</li>
          <li>Bandanas</li>
          <li>Paw balm</li>
          <li>Nail polish</li>
          <li>Facial scrub</li>
      </ul>
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
<Card className="text-center">
  <Card.Header></Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
    Go ahead and schedule a service and let our professional staff do the dirty work
    <Card.Img variant="top" src={ Banner }/>
    </Card.Text>
    <Button variant="primary">Make an Appointment</Button>
  </Card.Body>
  <Card.Footer className="text-muted"></Card.Footer>
</Card>
  <br></br>
  <br></br>
  <br></br>
  <br></br>

  {/* Contact Info */}
<Contact></Contact>

    </div>
    )
