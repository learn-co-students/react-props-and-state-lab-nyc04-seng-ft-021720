import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

import {getAll, getByType, getBetweenAge} from './../data/pets';


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

  onChangeType = (event) => {
    console.log('onChangeType fn called with value', event.target.value);
    const newFilterStateObject = {...this.state.filters};
    newFilterStateObject.type = event.target.value;
    this.setState({ filters: newFilterStateObject });
  }

  onFindPetsClick = () => {
    if (this.state.filters.type === 'all'){
      this.setState({pets: getAll()})
    } else {
      this.setState({pets: getByType(this.state.filters.type)})
    }
  }

  onAdoptPet = (updatedPet) => {
    console.log('onAdoptPet called on', updatedPet.name)

    updatedPet.isAdopted = true;

    const updatedPets = this.state.pets.map(currentPet => {
      if (currentPet.id === updatedPet.id) {
        return updatedPet
      } else {
        return currentPet
      }
    });

    this.setState({ pets: updatedPets })

  }

  render() {
    console.log('App state change:', this.state)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
                onChangeType={this.onChangeType}
                filtersType={this.state.filters.type}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                pets={this.state.pets}
                onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
