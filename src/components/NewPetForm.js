import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NewPetForm.css'
import { throws } from 'assert';

class NewPetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: '',
      name: '',
      species: '',
      about: '',
      location: '',
    };
  }
  
  onChangeHandler = (event) => {
    const newState = {}
    newState[event.target.name] = event.target.value;

    this.setState(newState);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const pet = {
      images: this.state.images,
      name: this.state.name,
      species: this.state.species,
      about: this.state.about,
      location: this.state.location,
    }

    this.props.addPetCallback(pet);
    
    this.setState({
      images: '',
      name: '',
      species: '',
      about: '',
      location: '',
    });
  }

  render() {
    return (
      <form  className="new-pet-form" onSubmit={this.handleSubmit}>
        <h3>Add a Pet</h3>
        <div>
          {/* NAME */}
          <label htmlFor="name">Name:</label>
          <input
            name='name'
            value={this.state.name}
            onChange={this.onChangeHandler}
          />
          {/* SPECIES */}
          <label htmlFor="species">Species:</label>
          <input
            name='species'
            value={this.state.species}
            onChange={this.onChangeHandler}
          />
          {/* LOCATION */}
          <label htmlFor="location">Location:</label>
          <input
            name='location'
            value={this.state.location}
            onChange={this.onChangeHandler}
          />
          {/* ABOUT */}
          <label htmlFor="about">About:</label>
          <input
            name='about'
            value={this.state.about}
            onChange={this.onChangeHandler}
          />
          {/* IMAGES */}
          <label htmlFor="images">Images:</label>
          <input
            name='images'
            value={this.state.images}
            onChange={this.onChangeHandler}
          />
        </div>
        <input className="btn btn-success new-pet-form--submit" type="submit" name="submit" value="Add a Pet" />
      </form>
    );
  }


}

NewPetForm.propTypes = {
  addPetCallback: PropTypes.func.isRequired,
};

export default NewPetForm;