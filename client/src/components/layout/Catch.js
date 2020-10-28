import React from 'react';
import { Image } from 'react-bootstrap';
import Cateyes from './imgs/catch_all_img.jpeg';
import './catch.css';

export const Catch = () => (

    <div className='opps_card'>
    <p className='opps_text'>Opps! This is the catch all page, which means you didn't get the mouse! </p>
    <p>... I mean this page doesn't exist.</p>
    <Image src={Cateyes} fluid />
    </div>

    )