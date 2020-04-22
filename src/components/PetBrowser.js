import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return this.props.pets.map(pet => {
      return <div className="ui cards" key={pet.id}><Pet pet={pet} onAdoptPet={this.props.onAdoptPet}/></div>
    });
  }
}

export default PetBrowser


// id: "5c142d9e-ea45-4231-8146-cccf71c704c0"
// type: "dog"
// gender: "male"
// age: 4
// weight: 1
// name: "Trident"
// isAdopted: false