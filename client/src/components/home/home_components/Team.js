import React from 'react';
import './home.css';
import { CardDeck, Card } from 'react-bootstrap';
import Staff1 from './imgs/pic_staff1.jpeg';
import Staff2 from './imgs/pic_staff2.jpg';
import Staff3 from './imgs/pic_staff3.jpeg';
import Staff4 from './imgs/pic_staff4.jpeg';
import Staff5 from './imgs/pic_staff5.jpeg';


export const Team = () => (

    <React.Fragment>

        <h1 class="section_title">OUR TEAM</h1>

        <CardDeck>
            <Card>
                <Card.Img variant="top" src={Staff1} />
                <Card.Body>
                    <Card.Title>Kameron Davey</Card.Title>
                    <Card.Text>
                        CEO
 </Card.Text>
                </Card.Body>
            </Card>

            <Card>
                <Card.Img variant="top" src={Staff2} />
                <Card.Body>
                    <Card.Title>Elsie Choi</Card.Title>
                    <Card.Text>
                        Adoption Lead
                              </Card.Text>
                </Card.Body>
            </Card>

            <Card>
                <Card.Img variant="top" src={Staff3} />
                <Card.Body>
                    <Card.Title>Atlanta Bonner</Card.Title>
                    <Card.Text>
                        Foster Coordinator
                              </Card.Text>
                </Card.Body>
            </Card>

            <Card>
                <Card.Img variant="top" src={Staff4} />
                <Card.Body>
                    <Card.Title>Nikolas Rios</Card.Title>
                    <Card.Text>
                        Lead veterinarian
                              </Card.Text>
                </Card.Body>
            </Card>

            <Card>
                <Card.Img variant="top" src={Staff5} />
                <Card.Body>
                    <Card.Title>Sammy Noble</Card.Title>
                    <Card.Text>
                        Event coordinator
                             </Card.Text>
                </Card.Body>
            </Card>
        </CardDeck>

    </React.Fragment>

)