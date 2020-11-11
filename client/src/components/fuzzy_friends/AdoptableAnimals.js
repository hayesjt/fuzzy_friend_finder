import React, { useState, useEffect } from "react";
import { Form, Card, Col, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import { AnimalCard } from "../fuzzy_friends/AnimalCard";
import Adoption from './imgs/animals-in-need.jpeg';
import './css/style.css';
import { Contact } from '../home/home_components/Contact';

export const AdoptableAnimals = () => {

    let [animalsArray, setAnimalsArray] = useState([])

    useEffect(() => {
        loadAnimals()
    }, [])

    // Loads all adoptable animals
    function loadAnimals() {
        axios.get("/api/pets/")
            .then(res => {
                //Loops filters out animals that have date in "adopted date" because they have already been adopted
                var adoptableAnimals = []
                for (var i = 0; i < res.data.length; i++) {
                    if (res.data[i].date_adopted === null) {
                        adoptableAnimals.push(res.data[i]);
                    }
                }
                setAnimalsArray(adoptableAnimals)
            }
            )
            .catch(err => console.log(err));
    };


    return (
        <div style ={{marginTop: "70px"}}>
            <Card className="animals-in-need-card">
                <h1 className="animals-in-need-title">Animals in Need</h1>
                <Card.Img src={Adoption} alt="Card image" />
            </Card>
            {/* Search/filter Form*/}
            <br />
            <Form className="align-items-center">
                <Row>
                    <Col sm={5}>
                        <h4>Status</h4>
                        <div key={`default-checkbox`} className="mb-3">
                            <Form.Check
                                type={'checkbox'}
                                id={`adoptable`}
                                label={`Adoptable`}
                            />
                            <Form.Check
                                type={'checkbox'}
                                id={`foster`}
                                label={`In Need of Fostering`}
                            />
                        </div>
                    </Col>
                    <Col sm={5}>
                        <h4>Animal Type</h4>
                        <div key={`default-checkbox`} className="mb-3">
                            <Form.Check
                                type={'checkbox'}
                                id={`cat`}
                                label={`Cat`}
                            />
                            <Form.Check
                                type={'checkbox'}
                                id={`dog`}
                                label={`Dog`}
                            />
                            <Form.Check
                                type={'checkbox'}
                                id={`critter`}
                                label={`Critter`}
                            />
                        </div>
                    </Col>
                    <Col sm={2}>
                        <Button variant="primary" type="submit">
                            Search
                        </Button>
                    </Col>
                </Row>
            </Form>

            <br /><Row>
               
                {animalsArray.map(pets => {
                    return (
                        <div className='col-4'>
                        <AnimalCard key={pets.id}
                            name={pets.name}
                            image={pets.image}
                            attention={pets.attention}
                            pet_type={pets.pet_type}
                            breed={pets.breed}
                            age={pets.age}
                            sex={pets.sex}
                            status={pets.status}
                            size={pets.size}
                            id={pets.pets_id}
                        />
                        </div>
                    )
                })}
</Row>
            <br /> <br />
            <br></br>
  <br></br>

  {/* Contact Info */}
<Contact></Contact>

        </div>
    )
}