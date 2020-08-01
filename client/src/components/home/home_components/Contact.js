import React from 'react';
import './home.css';
import { Card, Row, Col } from 'react-bootstrap';


export const Contact = () => (

    <React.Fragment>

        <h1 class="section_title">CONTACT US</h1>

        <Row className ='text-center'>

{/* Address */}
            <Col>
                <Card className = 'border-0'>
                <Card.Title>Address</Card.Title>
                    <Card.Text>
                            7186 Oriel Street N
                    </Card.Text>
                    <Card.Text>
                            St. Louis Park, MN, 55416
                    </Card.Text>
                </Card>
            </Col>

{/* Phone Numbers */}
            <Col>
                <Card className = 'border-0'>
                <Card.Title>Phone</Card.Title>
                    <Card.Text>
                            Adoption Center:763-648-5359
                    </Card.Text>
                    <Card.Text>
                            Vet Clinic: 763-554-6582
                    </Card.Text>
                    <Card.Text>
                            Support Services: 763-489-1678
                    </Card.Text>
                </Card>
            </Col>

{/* Hours */}
            <Col>
                <Card className = 'border-0'>
                <Card.Title>Hours</Card.Title>
                    <Card.Text>
                            Rescue Center (M-Sat) 8AM - 8PM
                    </Card.Text>
                    <Card.Text>
                            Vet Clinic (M-Sun) 7AM - 8PM
                    </Card.Text>
                </Card>
            </Col>

{/* Social Media */}
            <Col>
                <Card className = 'border-0'>
                <Card.Title>Social Media</Card.Title>
                    <Card.Text>
                            Facebook
                    </Card.Text>
                    <Card.Text>
                            Instagram
                    </Card.Text>
                    <Card.Text>
                            YouTube
                    </Card.Text>
                </Card>
            </Col>

        </Row>

        <br></br>
        <br></br>
        <br></br>

    </React.Fragment>

)