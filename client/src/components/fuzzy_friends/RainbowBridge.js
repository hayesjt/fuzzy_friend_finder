import React from 'react';
import { Contact } from '../home/home_components/Contact';
import { Carousel, Image } from 'react-bootstrap';

export const RainbowBridge = () => {

    return (
        <div style={{ marginTop: "70px" }}>
            <h1 className="animals-in-need-title">Rainbow Bridge</h1>

            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="rainbowbridge-item"
                        src="./pet_images/rainbowbridge-hunter.jpeg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Hunter - 2009</h3>
                        <p>Hunter was a lovable golden retriever that was your best friend. He always was so happy to see you. He loved trying to catch fish at the family cabin.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="rainbowbridge-item"
                        src="./pet_images/rainbowbridge-maslow.jpeg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Maslow - 2019</h3>
                        <p>He was a great little buddy who would follow me around the house and always keep me company. Sometimes by laying on my chest and purring loudly in my face.  He was so sweet and truly was a joy in my life. I miss him every day. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="rainbowbridge-item"
                        src="./pet_images/rainbowbridge-mindy.jpeg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Mindy - 2020</h3>
                        <p>She would create a deep conection with people that she trusted. Her owner passed in 2018, and she was taken in by his nephew who gave her the best couple last years of her life. She loved being around people.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br></br><hr></hr>
            <p className='poem'>“Just this side of heaven is a place called Rainbow Bridge.
            <br></br><br></br>
            When an animal dies that has been especially close to someone here, that pet goes to Rainbow Bridge. There are meadows and hills for all of our special friends so they can run and play together. There is plenty of food, water and sunshine, and our friends are warm and comfortable.
            <br></br><br></br>
            All the animals who had been ill and old are restored to health and vigor. Those who were hurt or maimed are made whole and strong again, just as we remember them in our dreams of days and times gone by. The animals are happy and content, except for one small thing; they each miss someone very special to them, who had to be left behind.
            <br></br><br></br>
            They all run and play together, but the day comes when one suddenly stops and looks into the distance. His bright eyes are intent. His eager body quivers. Suddenly he begins to run from the group, flying over the green grass, his legs carrying him faster and faster.
            <br></br><br></br>
            You have been spotted, and when you and your special friend finally meet, you cling together in joyous reunion, never to be parted again. The happy kisses rain upon your face; your hands again caress the beloved head, and you look once more into the trusting eyes of your pet, so long gone from your life but never absent from your heart.
            <br></br><br></br>
            Then you cross Rainbow Bridge together….”
            <br></br><br></br>
            — Author unknown</p>
            <br></br><br></br><br></br>
            {/* Contact Info */}
            <Contact></Contact>
        </div>
    )
}