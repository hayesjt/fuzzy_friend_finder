import React from 'react';
import './home.css';
import { Card, Button, Row, Col } from 'react-bootstrap';
import Service1 from './imgs/pic_service1.jpeg';
import Service2 from './imgs/pic_service2.jpeg';
import Service3 from './imgs/pic_service3.jpeg';
import Support1 from './imgs/pic_support1.jpeg';
import Support2 from './imgs/pic_support2.jpeg';
import Support3 from './imgs/pic_support3.jpeg';


export const Service = () => (

    <React.Fragment>

        <h1 class="section_title">SERVICES</h1>

        <Row>
            <Col>
                <Card>
                    <Card.Img variant="top" src={Service1} />
                    <Card.Body>
                        <Card.Title>Veterinary Clinic</Card.Title>
                        <Card.Text>
                            Fuzzy Friend Finder has its very own vet clinic located right next to our main rescue building. We offer services to the public and current foster animals. Schedule yours below!
    </Card.Text>
                        <Button variant="primary">Schedule Appointment</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={Service2} />
                    <Card.Body>
                        <Card.Title>Obedience Training</Card.Title>
                        <Card.Text>
                            Training your animal takes time and can be frusterating. We offer group and indivisualized training for a small fee. Local trainers volunteer their time so spots are limited. Schedule yours below!
    </Card.Text>
                        <Button variant="primary">Schedule Appointment</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={Service3} />
                    <Card.Body>
                        <Card.Title>Professional Grooming</Card.Title>
                        <Card.Text>

                        Sometimes we are not experienced enough to provide hygienic care for our animals. Our local grooming volunteers work at shops all around Minnesota and can provide all levels of hygienic care.
                          </Card.Text>
                        <Button variant="primary">Schedule Appointment</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

<br></br>

        {/* SECOND ROW */}

        <Row>
            <Col>
                <Card>
                    <Card.Img variant="top" src={Support1} />
                    <Card.Body>
                        <Card.Title>Support Services</Card.Title>
                        <Card.Text>
                        Sometimes we get into situations where our environments are unsafe or not stable. During those times we want what is best for our animals and that is a safe stable environment. All year round, Fuzzy Friend finder has local volunteers that can foster animals for as long as an owner needs for their situation to become safe and stable again. These services are at no cost and we open our doors to all circumstances.     </Card.Text>
                        <Button variant="primary">Support Services</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={Support2} />
                    <Card.Body>
                        <Card.Title>Surrender Services</Card.Title>
                        <Card.Text>

                        Sometimes life becomes uncertain and we are unable to provide for an animal we currently have. If an animal is no longer thriving in your home but you want to make sure it has a wonderful next home, please contact Fuzzy Friend Finder about your situation. We take in animals for a small fee and then rehome them to someone that can provide a quality life for that animal.
                         </Card.Text>
                        <Button variant="primary">Surrender Services</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={Support3} />
                    <Card.Body>
                        <Card.Title>End of Life Services</Card.Title>
                        <Card.Text>
                        Unfortunately, ever animal crosses the rainbow bridge eventually. Every animal deserves to be remebered as part of your loving family! During this emotional time Fuzzy Friend finder offers End of Life Services for all animals. If they were adopted directly from us, we would love to cremate and create a custom urn for your animal. If not, we provide the same service for a small fee.     </Card.Text>
                        <Button variant="primary">End of Life Services</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

    </React.Fragment>

)