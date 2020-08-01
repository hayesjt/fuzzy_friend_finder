import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import Slide1 from './imgs/pic_slide1.jpeg';
import Slide2 from './imgs/pic_slide2.jpeg';
import Slide3 from './imgs/pic_slide3.jpeg';

export const PicSlides = () => (

    <Carousel>
        <Carousel.Item>
            <Image src={Slide1} fluid />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image src={Slide2} fluid />

            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image src={Slide3} fluid />
            <Carousel.Caption>
                <h3>Fuzzy Events</h3>
                <p>We offer a vareity of events that can help you and your fuzzy friend connect!</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>

)


