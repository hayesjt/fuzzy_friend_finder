import React from 'react';
import { PicSlides } from './home_components/Carousel';
import { Values } from './home_components/Values';
import { Events } from './home_components/Events';
import { Service } from './home_components/Services';
import { Faq } from './home_components/Faq';
import { Team } from './home_components/Team';
import { Sponsors } from './home_components/Sponsors';

export const Home = () => (

// Container for Home components coming in
<React.Fragment>

{/* Carousel of images */}
<PicSlides></PicSlides>

{/* Values of the Rescue */}
<Values></Values>

{/* Upcoming events */}
<Events></Events>

{/* Services offered */}
<Service></Service>

{/* Drop down quick facts */}
<Faq></Faq>

{/* Paid Staff  */}
<Team></Team>

{/* Sponsors */}
<Sponsors></Sponsors>

</React.Fragment>

    )
