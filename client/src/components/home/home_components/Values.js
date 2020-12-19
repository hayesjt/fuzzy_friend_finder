import React from 'react';
import './home.css';
import { CardDeck, Card, Button } from 'react-bootstrap';
import Values1 from './imgs/pic_values1.jpeg';
import Values2 from './imgs/pic_values2.jpeg';
import Values3 from './imgs/pic_values3.jpeg';


export const Values = () => (

    <React.Fragment>

        <h1 class="section_title">OUR MISSION</h1>

        <CardDeck>
            <Card>
                <Card.Img variant="top" src={Values1} />
                <Card.Body>
                    <Card.Title>Supporting Both Ends of the Leash</Card.Title>
                    <Card.Text>
                        We strive to support both animals and owners through various services and intense application matching. We ensure each adoption is a perfect pair so each animal can have a forever home.
    </Card.Text>
                    <Button href="/adoptableanimals" variant="primary">Adoptable Animals</Button>
                </Card.Body>
            </Card>

            <Card>
                <Card.Img variant="top" src={Values2} />
                <Card.Body>
                    <Card.Title>Quality Support and Care</Card.Title>
                    <Card.Text>
                        We run and operate our own vet clinic onsite to ensure ever single animal we take in gets quality care before going to its forever home. Once adopted, all animals are welcome to use our vet clinic at a discounted rate.
    </Card.Text>
                    <Button href="/veterinaryservices" variant="primary">Veterinary Services</Button>
                </Card.Body>
            </Card>

            <Card>
                <Card.Img variant="top" src={Values3} />
                <Card.Body>
                    <Card.Title>Awareness and Community </Card.Title>
                    <Card.Text>
                        Every month we host a variety of volunteer and public events. Through these events we hope to increase the awareness of homeless pets and adoption options. We invite everyone to stop in to one of our events.
    </Card.Text>
                    <Button variant="primary">Upcoming Events</Button>
                </Card.Body>
            </Card>
        </CardDeck>

    </React.Fragment>

)
