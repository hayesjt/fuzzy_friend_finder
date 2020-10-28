import React from 'react';
import Stay from './imgs/stay.jpeg';
import Shake from './imgs/shake.jpeg';
import Leash from './imgs/leash.jpeg';
import Sit from './imgs/sit.jpeg';
import { CardDeck, Card, Button } from 'react-bootstrap';
import { Contact } from '../home/home_components/Contact';


export const Obedience = () => (
    <div style ={{marginTop: "70px"}}>
        <Card className="bg-dark text-white">
  <Card.Img src= { Sit } alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title id="end">Obedience Training</Card.Title>
    <Card.Text id="obedience-text">
      Help your pet learn new skills
    </Card.Text>
    <Card.Text id="resources-text"></Card.Text>
  </Card.ImgOverlay>
</Card>
<CardDeck>
  <Card>
    <Card.Img variant="top" src={ Stay } fluid/>
    <Card.Body>
      <Card.Title>Puppy Training</Card.Title>
      <Card.Text>
      Puppy training is an important part of socialization and helping your new pet gain confidence and learn new skills. Training your dog early, and including the whole family, is a key component in bringing out the best in your best friend.
      <br></br>
      <br></br>
      <ul>
          <li>Basic Training Essentials: $150</li>
          <li>3-Week Program: $350</li>
      </ul>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={ Leash }/>
    <Card.Body>
      <Card.Title>Specialty Classes and Workshops</Card.Title>
      <Card.Text>
      Specialty classes include training for more specific skills, such as clicker training, signals, and tricks. Workshops focusing on agility, not barking, and more are also available. 
      <br></br>
      <br></br>
      <ul>
          <li>6-Week Program: $650</li>
          <li>12-Week Program: $1,200</li>
      </ul>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={ Shake }/>
    <Card.Body>
      <Card.Title>Pet Behavior Resources</Card.Title>
      <Card.Text>
      Sometimes pet behavior problems seem overwhelming, but many can be managed with the application of a little knowledge and a little effort. We're here to help you find answers to your pet behavior questions.
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
<Card className="text-center">
  <Card.Header></Card.Header>
  <Card.Body>
    <Card.Title>Training and Obedience</Card.Title>
    <Card.Text>
    Schedule a session with our professional training staff
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
    
