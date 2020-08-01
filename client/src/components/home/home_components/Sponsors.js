import React from 'react';
import './home.css';
import { Card, Row, Col } from 'react-bootstrap';
import Sponsor1 from './imgs/pic_sponsor1.jpg';
import Sponsor2 from './imgs/pic_sponsor2.png';
import Sponsor3 from './imgs/pic_sponsor3.png';
import Sponsor4 from './imgs/pic_sponsor4.png';
import Sponsor5 from './imgs/pic_sponsor5.jpg';


export const Sponsors = () => (

    <React.Fragment>

        <h1 class="section_title">OUR SPONSORS</h1>

        <Row>
            <Col>
                <Card>
                    <Card.Img variant="top" src={Sponsor1} />
                    <Card.Body>
                        <Card.Title className ='text-center'>REI Coop</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={Sponsor2} />
                    <Card.Body>
                        <Card.Title className ='text-center'>Power House</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={Sponsor3} />
                    <Card.Body>
                        <Card.Title className ='text-center'>Stella and Chewy</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={Sponsor4} />
                    <Card.Body>
                        <Card.Title className ='text-center'>Bark Box</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={Sponsor5} />
                    <Card.Body>
                        <Card.Title className ='text-center'>Volkswagen</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

    </React.Fragment>

)