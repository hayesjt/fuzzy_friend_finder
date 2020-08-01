import React from 'react';
import './home.css';
import { Card, Button, Row, Col } from 'react-bootstrap';
import Event1 from './imgs/pic_event1.jpeg';
import Event2 from './imgs/pic_event2.jpeg';
import Event3 from './imgs/pic_event3.jpeg';


export const Events = () => (

    <React.Fragment>

        <h1 class="section_title">UPCOMING EVENTS</h1>

        <Row>
            <Col>
                <Card>
                    <Card.Img variant="top" src={Event1} />
                    <Card.Body>
                        <Card.Title>Saturday Transport</Card.Title>
                        <Card.Text>
                        Every Saturday we take in a transport of new animals entering our rescue. We get a mix of puppies, adult dogs, and elderly dogs. Sometimes we welcome other animals such as cats, birds, or reptiles. We need volunteers to help us get these animals bathed, updated on vaccines and vet care, then off to their new forever or foster homes. This is a fun way to socialize with animals as well as other volunteers and do a wonderful for your community!     </Card.Text>
                        <Button variant="primary">Volunteer Here</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={Event2} />
                    <Card.Body>
                        <Card.Title>Puppy Yoga</Card.Title>
                        <Card.Text>
                        Do you want a puppy but do not have the time or space for it yet? No problem! Come get your puppy fix at our monthly Puppy Yoga session. We have a variety of volunteer Yogis come and teach guided puppy yoga. During this time, you can relax and cuddle up with your puppy of choosing. We also welcome these classes to the public so they can bring their own pups along. Spots are limited so make sure you get your spot below!    </Card.Text>
                        <Button variant="primary">Reserve a Spot</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={Event3} />
                    <Card.Body>
                        <Card.Title>Learn to Groom</Card.Title>
                        <Card.Text>
                        Does your puppy hate its nails clipped? Are you not sure what shampoo to use? Does your cat run away from their daily brushing? Any animal hygiene question can be answered through attending our monthly Groom and Learn session. During this time, we have volunteer groomers come in and help provide you with supplies, tips, and insights on how to groom your animal. All animals may attend with you.    </Card.Text>
                        <Button variant="primary">Reserve a Spot</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

    </React.Fragment>

)