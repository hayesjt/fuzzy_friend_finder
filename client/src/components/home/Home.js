import React from 'react';
import { PicSlides } from './home_components/Carousel';
import { Values } from './home_components/Values';
import { Events } from './home_components/Events';
import { Faq } from './home_components/Faq';

export const Home = () => (

// Container for Home components coming in
<React.Fragment>

{/* Carousel of images */}
<PicSlides></PicSlides>

{/* Values of the Rescue */}
<Values></Values>

{/* Upcoming events */}
<Events></Events>

{/* Drop down quick facts */}
<Faq></Faq>

</React.Fragment>

    )
