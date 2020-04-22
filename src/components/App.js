import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  handleChangeType = (event) => {
    let filterType = {
      type: event.target.value
    }
    this.setState({
      filters: filterType
    })
  }

  handleFindPetsClick = () => {
    let baseURL = "/api/pets"
    if (this.state.filters.type !== "all"){
      baseURL += `?type=${this.state.filters.type}` 
    }
    fetch(baseURL)
      .then(r => r.json())
      .then(petsArr => this.setState({pets: petsArr}))
  }

  handleAdoptPet = (id) => {
    const updatedPets = this.state.pets.map(pet => {
      if (pet.id === id) {
        pet.isAdopted = true;
        return pet;
      } else {
        return pet
      }
      
    });
    this.setState({
      pets: updatedPets
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.handleChangeType} onFindPetsClick={this.handleFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.handleAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default App
