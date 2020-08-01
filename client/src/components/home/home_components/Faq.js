import React from 'react';
import { Accordion, Card } from 'react-bootstrap';

export const Faq = () => (

<Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      How many adoptions do we do a year?
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>In 2019, 14,783 dogs and 2,381 cats got adopted from Fuzzy Friend Finder. Our other not-so furry friends such as birds and turtles had 574 adoptions. </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      Are we a no kill shelter?
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Of course, every animal deserves their forever home. We have our own vet clinic to help animals with yearly checkups and more intense care for all conditions.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="2">
      What is our adoption-return rate?
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Card.Body>Only 2% of adopted animals get returned to Fuzzy Friend Finder each year. We review every application to ensure every animals gets the best home to fit its needs. </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="3">
      Where does our funding come from?
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="3">
      <Card.Body>55% of our funding comes from community donations, 25% comes from our wonderful sponsorships, and 20% come from the adoption fees.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="4">
    How do we handle dogs with behavioral issues such as biting, aggression, or severe anxiety?
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="4">
      <Card.Body>Here a Fuzzy Friend Finder we do not believe there is such thing as a bad dog. We have professional dog trainers and highly trained staff to rehab these dogs.</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
    )