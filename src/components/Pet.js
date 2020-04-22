import React from 'react'

class Pet extends React.Component {

  getAdoptionButton = () => {
    if(this.props.isAdopted){
      return <button className="ui disabled button">Already adopted</button>
    } else {
      return <button id={this.props.pet.id} className="ui primary button" onClick={e => this.props.pet.onAdoptPet(e.target.id)}>Adopt pet</button>
    }
  }
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender === 'male' ? '♂' : '♀' }
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.getAdoptionButton()}
        </div>
      </div>
    )
  }
}

export default Pet
