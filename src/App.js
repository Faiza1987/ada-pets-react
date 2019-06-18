import React, { Component } from 'react';
import PetList from './components/PetList';
import PetCard from './components/PetCard'
import PetDetails from './components/PetDetails';
import SearchBar from './components/SearchBar';
import NewPetForm from './components/NewPetForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import pets from './data/pets.json';
import { throws } from 'assert';
import { runInThisContext } from 'vm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petList: pets,
      currentPet: undefined,
    };
  }

  // If currentPet is undefined, 
  displayPetList = () => {
    const {currentPet} = this.state;
    if (currentPet) {
      return(
        <PetDetails currentPet={currentPet} />
      )
    }
  };

  // Updates the state of the entire App component
  selectPet = (index) => {
    let petIndex = this.state.petList.findIndex(pet => pet.id === index)

    const pet = this.state.petList[petIndex]

    this.setState({
      currentPet: pet,
    })
  }

  removeSelectedPet = (index) => {
    let updatedPetList = this.state.petList
    updatedPetList.splice(index, 1)

    this.setState({
      petList: updatedPetList,
    })
  }

  addPet = (pet) => {
    const pets = this.state.petList;
    pet['id'] = this.state.petList[this.state.petList.length - 1].id + 1;

    pets.push(pet);
    this.setState({
      petList: pets,
      message: `${pet.name} is added`,
    });
  }

  render() {
    const { currentPet } = this.state;
    
    return (
      <main className="App">
        <header className="app-header">
          <h1>Ada Pets</h1>
        </header>
        
        <section className="search-bar-wrapper">
          { /* Wave 4:  Place to add the SearchBar component */ }
          <SearchBar />
        </section >

        <section>
          {this.displayPetList()}
        </section>

          
        <section className="pet-list-wrapper">
          <PetList allPets={this.state.petList}
            onSelectPet={this.selectPet}
            onRemovePet={this.removeSelectedPet}
          />
          
        </section>
        <section className="new-pet-form-wrapper">
          { /* Wave 3:  Where NewPetForm should appear */ }
          <NewPetForm addPetCallback={this.addPet}/>
        </section>
      </main>
    );
  }
}

export default App;
