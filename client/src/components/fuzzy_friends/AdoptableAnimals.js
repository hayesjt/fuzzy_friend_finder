import React, { useState, useEffect } from "react";
import axios from 'axios'
import { AnimalCard } from "../fuzzy_friends/AnimalCard"

export const AdoptableAnimals = () => {

    let [animalsArray, setAnimalsArray] = useState([])

    useEffect(() => {
        loadAnimals()
    }, [])

    // Loads all adoptable animals
    function loadAnimals() {
        axios.get("/api/pets/")
            .then(res => {
                //Loops filters out animals that have date in "adopted date" because they have already been adopted
                var adoptableAnimals = []
                for (var i = 0; i < res.data.length; i++) {
                    if (res.data[i].date_adopted === null) {
                        adoptableAnimals.push(res.data[i]);
                    }
                }
                setAnimalsArray(adoptableAnimals)
            }
            )
            .catch(err => console.log(err));
    };


    return (
        <div>
            <p>ADOPTABLE ANIMALS PAGE</p>
        
        <h4>Current Adoptable Animals</h4>

        <div className="animals-cards">
          {animalsArray.map(pets => {
            return (
              <AnimalCard key={pets.id} 
              name={pets.name}
              image={pets.image}
              attention={pets.attention}
              pet_type={pets.pet_type}
              breed={pets.breed}
              age={pets.age}
              sex={pets.sex}
              size={pets.size}
              good_with_dogs={pets.good_with_dogs}
              good_with_kids={pets.good_with_kids}
              indoor_or_outdoor={pets.indoor_or_outdoor}
              housetrained={pets.housetrained}
              surrendered={pets.date_surrendered}
              notes={pets.notes}
              />
                )
            })}
              </div>
            
    </div>
    )}