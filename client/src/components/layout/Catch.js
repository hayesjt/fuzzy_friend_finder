import React from 'react';
import { Image, Jumbotron } from 'react-bootstrap';
import Cateyes from './imgs/catch_all_img.jpeg';
import './catch.css';

export const Catch = () => (

    <div className="opps_card">
        <Jumbotron>
            <container>
                <h5 className='opps_text'>Have you seen my mousy? The page you are trying to reach does not exist. </h5>
                <Image className="catch-img" src={Cateyes} />
            </container>
        </Jumbotron>
    </div>

    )