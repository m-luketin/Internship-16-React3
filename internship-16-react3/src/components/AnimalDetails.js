import React, { Component } from "react";
import { throws } from "assert";
import { Link } from "react-router-dom";

class AnimalDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { animalDetails: {} };
  }

  componentDidMount() {
    if (this.props.match.params.id === "create") {
      return;
    }

    fetch(
      "http://localhost:3000/" +
        this.props.species +
        "/" +
        this.props.match.params.id
    )
      .then(response => response.json())
      .then(jsonData => {
        if (!jsonData.id) throw "Animal does not exist!";
        this.setState({ animalDetails: jsonData });
      })
      .catch( () => {
        return this.props.history.push("/404");
      });
  }

  DeleteAnimal = () => {
    fetch(
      "http://localhost:3000/" +
        this.props.species +
        "/" +
        this.props.match.params.id,
      {
        method: "delete"
      }
    )
      .then(response =>
        response.json().then(json => {
          return json;
        })
      )
      .then(() => {
        this.props.history.push("/" + this.props.species);
      });
  };

  render() {
    const { animalDetails } = this.state;
    return (
      <div>
        <div>
          <span>ID: </span>
          {animalDetails.id}
        </div>
        <div>
          <span>Name: </span>
          {animalDetails.name}
        </div>
        <div>{animalDetails.description}</div>
        <button onClick={this.DeleteAnimal}>Delete</button>
        <Link to={'/' + this.props.species + "/edit" + "/" + animalDetails.id}>
          Edit
        </Link>
      </div>
    );
  }
}

export default AnimalDetails;
