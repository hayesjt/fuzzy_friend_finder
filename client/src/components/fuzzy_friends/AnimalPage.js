import React, { useEffect, useState } from "react";
import axios from "axios";

export const AnimalPage = (props) => {
  const [Animal, setAnimal] = useState({})
  console.log(props.match.params.pets_id)

  useEffect(() => {
    axios.get("/api/" + props.match.params.pets_id).then(res => setAnimal(res.data[0]))
      .catch(err => console.log(err));
  }, [])

  return (
    <div className="card animal-page">
      <div className="card-body">
        <img src={Animal.image} style={{ width: 100 + "%" }} className="card-img-top" alt="animal picture"></img>
        <h2 className="card-title">{Animal.name}</h2>
        <ul className='animalFactsList'>
          {/* <li>Attention: {props.attention}</li> */}
          <li><b>Type / Breed:</b> {Animal.pet_type} / {Animal.breed}</li>
          <li><b>Age:</b> {Animal.age}</li>
          <li><b>Sex:</b> {Animal.sex}</li>
          <li><b>Size:</b> {Animal.size}</li>
          <li><b>Status:</b> {Animal.status}</li>
        </ul>
      </div>
    </div>
  )
}