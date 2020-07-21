  
import React from "react";

export const AnimalCard = (props) => {

  return (
    <div className="card">
      <div className="card-body">
    <img src={props.image} style={{width: 200 + "px"}} className="card-img-top" alt="animal picture"></img>
      <h2 className="card-title">{props.name}</h2>
      <ul>
          <li>Attention: {props.attention}</li>
          <li>Type / Breed: {props.pet_type} / {props.breed}</li>
          <li>Age: {props.age}</li>
          <li>Sex: {props.sex}</li>
          <li>Size: {props.size}</li>
          <li>Good With Dogs? {props.good_with_dogs}</li>
          <li>Good With Kids? {props.good_with_kids}</li>
          <li>Indoor or Outdoor? {props.indoor_or_outdoor}</li>
          <li>Housetrained? {props.housetrained}</li>
          <li>Date Surrendered: {props.date_surrendered}</li>
          <li>Notes: {props.notes}</li>
      </ul>
      </div>
      </div>
      )
}