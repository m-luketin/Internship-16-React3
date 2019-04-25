import React, { Component } from "react";
import { throws } from "assert";

class AnimalDetails extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { animalDetails: {} };
  }

  componentDidMount() {
    fetch(
      "http://localhost:3000/" +
        this.props.species +
        "/" +
        this.props.match.params.id
    )
      .then(response => response.json())
      .then(jsonData => {
        if(!jsonData.id)  
            throw "Animal does not exist!";
        this.setState({ animalDetails: jsonData });
      })
      .catch(error => {
        console.log(error);
        return this.props.history.push("/404");
      });
  }

  render() {
    const { animalDetails } = this.state;
    return (
      <div>
        {animalDetails.id} {animalDetails.name} {animalDetails.description}
      </div>
    );
  }
}

export default AnimalDetails;
