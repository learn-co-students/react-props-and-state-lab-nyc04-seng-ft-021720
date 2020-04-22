import React from 'react'

class Pet extends React.Component {

  handleAdoptClick = () => {
    this.props.onAdoptPet(this.props.pet)
  }

  render() {
    const {type, gender, age, weight, name, isAdopted} = this.props.pet

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {name} 
            {gender === 'female' ? ' ♀ ' : ' ♂ '}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {
            isAdopted
            ? 
            <button className="ui disabled button">Already adopted</button>
            :
            <button className="ui primary button" onClick={this.handleAdoptClick}>Adopt pet</button>
          }
        </div>
      </div>
    )
  }
}

export default Pet


// id: "5c142d9e-ea45-4231-8146-cccf71c704c0"
// type: "dog"
// gender: "male"
// age: 4
// weight: 1
// name: "Trident"
// isAdopted: false