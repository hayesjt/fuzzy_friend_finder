import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import './css/donate.css';
import Bowl from './imgs/bowl.jpeg';
import Donations from './imgs/donations.jpeg';
import Collars from './imgs/collars.jpeg';
import Bags from './imgs/bags.jpeg';
import Pupcat from './imgs/pupcat.jpeg';
import Toys from './imgs/toys.jpeg';
import { Contact } from '../home/home_components/Contact';

export const Donate = () => (
    <div style ={{marginTop: "70px"}}>
        <Card className="bg-dark text-white">
  <Card.Img src={ Bowl } alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title id="end">Donate...</Card.Title>
    <Card.Text id="end-text">
      ...to help animals in need
    </Card.Text>
    <Card.Text id="resources-text"></Card.Text>
  </Card.ImgOverlay>
</Card>

<CardDeck>
  <Card>
    <Card.Img variant="top" src={ Donations } fluid/>
    <Card.Body>
      <Card.Title>We Take...</Card.Title>
      <Card.Text>
        <ul>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
        </ul>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src= { Bags }/>
    <Card.Body>
      <Card.Title>We Sometimes Take...</Card.Title>
      <Card.Text>
        <ul>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
        </ul>
        Please call ahead.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={ Collars }/>
    <Card.Body>
      <Card.Title>We Don't Take...</Card.Title>
      <Card.Text>
        <ul>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
        </ul>
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>

<Card>
    <Card.Img variant="top" src={ '' } />
    <Card.Body>
      <Card.Text>
        <h1>How to drop off supplies:</h1>
      </Card.Text>
    </Card.Body>
  </Card>
<br></br>
  <Card>
    <Card.Img variant="top" src={ '' } />
    <Card.Body>
      <Card.Text>
        <h1>How to donate money:</h1>
      </Card.Text>
    </Card.Body>
  </Card>
<br></br>
  <Card>
    <Card.Img variant="top" src={ '' } />
    <Card.Body>
      <Card.Text>
        <h1>How to donate your time:</h1>
      </Card.Text>
    </Card.Body>
  </Card>

  <CardDeck>
  <Card>
    <Card.Img variant="top" src={ Pupcat } fluid/>
    <Card.Body>
        <br></br>
        <br></br>
    
      <Card.Title>Highlight 1</Card.Title>
      <Card.Text>
      
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src= { Toys }/>
    <Card.Body>
      <Card.Title>Highlight 2</Card.Title>
      <Card.Text>
        
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>

  <br></br>
  <br></br>


  {/* Contact Info */}
<Contact></Contact>

    </div>
    )
