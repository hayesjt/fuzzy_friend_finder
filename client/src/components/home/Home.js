import React from 'react';
import { Faq } from './home_components/Faq';
import { PicSlides } from './home_components/Carousel';

export const Home = () => (


// Container for Home components coming in
<React.Fragment>

{/* Carousel of images */}
<PicSlides></PicSlides>

{/* Drop down quick facts */}
<Faq></Faq>

</React.Fragment>


    )
