import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import Slide1 from './imgs/pic_slide1.jpeg';
import Slide2 from './imgs/pic_slide2.jpeg';
import Slide3 from './imgs/pic_slide3.jpeg';
import './home.css';

export const PicSlides = () => (

    <Carousel style = {{marginTop: "70px"}}>
        <Carousel.Item>
            <Image src={Slide1} fluid />
            <Carousel.Caption>
                <h3 class = 'carousel_label'>ADOPTION.</h3>
                <p class = 'carousel_label'>Every animal gets adopted to the best home for it.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image src={Slide2} fluid />

            <Carousel.Caption>
                <h3 class = 'carousel_label'>CARE.</h3>
                <p class = 'carousel_label'>We offer care for all animals regardless of health status.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image src={Slide3} fluid />
            <Carousel.Caption>
                <h3 class = 'carousel_label'>COMMUNITY.</h3>
                <p class = 'carousel_label'>We offer a vareity of events to help connect animals with volunteers and owners.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>

)


