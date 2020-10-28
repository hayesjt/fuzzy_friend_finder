import React from 'react';
import { CardDeck, Card, Badge } from 'react-bootstrap';
import './css/services.css';
import Paws from './imgs/paws.jpeg';
import Bunny from './imgs/bunny.jpeg';
import Urn from './imgs/urn.jpeg';
import Hospital from './imgs/hospital.jpeg';
import Snuggle from './imgs/snuggle.jpeg';
import { Contact } from '../home/home_components/Contact';

export const EndOfLife = () => (
    <div style ={{marginTop: "70px"}}>
        <Card className="bg-dark text-white">
  <Card.Img src={ Paws } alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title id="end">End of Life Services</Card.Title>
    <Card.Text id="end-text">
      What to do when your pet passes away
    </Card.Text>
    <Card.Text id="resources-text"></Card.Text>
  </Card.ImgOverlay>
</Card>
<CardDeck>
  <Card>
    <Card.Img variant="top" src={ Bunny } fluid/>
    <Card.Body>
      <Card.Title>Is Your Pet In Pain?</Card.Title>
      <Card.Text>
      When cats and dogs are suffering, they may not show outward signs that we normally associate with pain like whimpering or crying. Sometimes an animal will continue to eat or drink in spite of pain or disorientation. Some physiological and behavioral signs that your pet might be experiencing pain include excessive panting or gasping for breath, reclusiveness, reluctance to move and food pickiness.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src= { Hospital }/>
    <Card.Body>
      <Card.Title>Pet Hospice Care</Card.Title>
      <Card.Text>
      Pet hospice care, also known as palliative care, is an option if your pet is suffering from a terminal illness and a cure is not possible. The goal is to make a pet’s final days or weeks more pleasant with the proper use of pain medications, dietary strategies and human interaction. Pet hospice is not a place, but a personal choice and philosophy based on the principle that death is a part of life and can be dignified. When considering hospice care, pet parents should very careful not to prolong the suffering of pets who are in pain or experiencing poor quality of life.{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={ Urn }/>
    <Card.Body>
      <Card.Title>Pet Cremation and Burial</Card.Title>
      <Card.Text>
      It is very common for pet owners to have their deceased pets cremated. You need to decide if you wish to keep your pet's ashes as a remembrance. If so, you will want to arrange an individual (or private) cremation, meaning that your pet will be cremated alone. Businesses that offer individual cremation commonly offer home pick-up/delivery of remains as part of their service packages.
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
<Card>
    <Card.Img variant="top" src={ Snuggle } />
    <Card.Body>
      <Card.Text>
        <h1>Dealing with Pet Loss</h1>
        <div>
  <h2>
  <Badge variant="secondary">87%</Badge> of pet owners experience at least one symptom of grief
  </h2>
  <h3>
  <Badge variant="secondary">35%</Badge> still experience grief after 6 months
  </h3>
  <h4>
  <Badge variant="secondary">22%</Badge> still experience grief after 1 year
  </h4>
</div>
      There are many forms of grief that are completely normal in the wake of the loss of a beloved pet. It can help to memorialize your pet in a way that includes others who cared about him or her. Friends and family can help form a support network. If severe symptoms of grief persist, it is best to consult with your doctor about your feelings and ways to cope with this loss.
      </Card.Text>
    </Card.Body>
  </Card>
  <br></br>
  <br></br>


  {/* Contact Info */}
<Contact></Contact>

    </div>
    )
