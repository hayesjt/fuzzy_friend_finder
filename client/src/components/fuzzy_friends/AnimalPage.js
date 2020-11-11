import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { Contact } from '../home/home_components/Contact';

export const AnimalPage = (props) => {
  const [Animal, setAnimal] = useState({})
  console.log(props.match.params.pets_id)

  useEffect(() => {
    axios.get("/api/" + props.match.params.pets_id).then(res => setAnimal(res.data[0]))
      .catch(err => console.log(err));
  }, [])

  let goodWithDogs
  if (Animal.good_with_dogs === true) { goodWithDogs = 'Yes' }
  else { goodWithDogs = 'No' }

  let goodWithCats
  if (Animal.good_with_cats === true) { goodWithCats = 'Yes' }
  else { goodWithCats = 'No' }

  let goodWithKids
  if (Animal.good_with_kids === true) { goodWithKids = 'Yes' }
  else { goodWithKids = 'No' }


  let attentionMessage
  if (Animal.attention) {
    attentionMessage = "<li className='attention'>Attention:" + Animal.attention + "</li>"
  }

  let surrenderDate = JSON.stringify(Animal.date_surrendered)
  console.log(Animal.date_surrendered)


  return (
    <div style={{ marginTop: "70px" }}>
      <div className="card animal-page">
        <div className="card-body">
          <img src={Animal.image} style={{ width: 50 + "%" }} className="animal-info-page" alt="animal picture"></img>
          <div className='animalInfoText'>
            <h2 className="card-title">{Animal.name}</h2>
            <ul className='animalFactsList'>
              {attentionMessage}
              <li><b>Type: </b>{Animal.pet_type}</li>
              <li><b>Breed: </b>{Animal.breed}</li>
              <li><b>Age:</b> {Animal.age}</li>
              <li><b>Sex:</b> {Animal.sex}</li>
              <li><b>Size:</b> {Animal.size}</li>
              <li><b>Status:</b> {Animal.status}</li>
              <li><b>Good With Dogs?:</b> {goodWithDogs}</li>
              <li><b>Good With Cats?:</b> {goodWithCats}</li>
              <li><b>Good With Kids?:</b> {goodWithKids}</li>
              <li><b>Indoor or Outdoor:</b> {Animal.indoor_or_outdoor}</li>
              <li><b>Date Surrendered:</b> {surrenderDate}</li>
              <li><b>Description:</b> {Animal.description}</li>
            </ul>
          </div></div>
      </div>
      <br></br>
      <Link to='/adoptableAnimals'>Back To Adoptable Animals</Link>
      <br></br>
      <br></br>

      {/* Contact Info */}
      <Contact></Contact>
    </div>
  )
}