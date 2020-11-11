  
import React from "react";
import { Link } from 'react-router-dom';

export const AnimalCard = (props) => {
  let animalInfoURL = '/animalinfo/' + props.id
  return (
    <div className="card animal-card" >
      <div className="card-body">
    <img src={props.image} style={{width: 100 + "%"}} className="card-img-top" alt="animal picture"></img>
      <h2 className="card-title">{props.name}</h2>
      <ul className='animalFactsList'>
          {/* <li>Attention: {props.attention}</li> */}
          <li><b>Type / Breed:</b> {props.pet_type} / {props.breed}</li>
          <li><b>Age:</b> {props.age}</li>
          <li><b>Sex:</b> {props.sex}</li>
          <li><b>Size:</b> {props.size}</li>
          <li><b>Status:</b> {props.status}</li>    
          <Link to ={animalInfoURL} >Read More</Link>
      </ul>
      </div>
      </div>
      )
}