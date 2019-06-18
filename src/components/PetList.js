import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';
import NewPetForm from './NewPetForm';

import 'bootstrap/dist/css/bootstrap.min.css';


const PetList = (props) => {

  const allPets = props.allPets.map((pet, i) => {
    return (
          <PetCard 
            index={i}
            {...pet}
            onSelectPetClick={props.onSelectPet}
            onRemovePetClick={props.onRemovePet}
          />
    )
  })
  return(
      <div className="card-group">
        {allPets}
      </div>
  )
}

PetList.propTypes = {
  pets: PropTypes.array.isRequired,
  onSelectPet: PropTypes.func,
};

export default PetList;
