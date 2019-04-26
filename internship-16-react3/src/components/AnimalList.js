import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class AnimalList extends Component {
  constructor(props) {
    super(props);
    this.state = { animalData: [] };
  }

  componentDidMount() {
    fetch("http://localhost:3000/" + this.props.species)
      .then(response => response.json())
      .then(jsonData => {
        this.setState({ animalData: jsonData });
      });
  }

  render() {
    return (
      <>
        <div>
          {this.state.animalData.map(element => (
            <div>
              <Link to={`/${this.props.species}/${element.id}`}>
                {" "}
                {element.id} {element.name} {element.description}{" "}
              </Link>
            </div>
          ))}
        </div>
        <div>
          <Link to={this.props.species + "/create"}>Create</Link>
        </div>
      </>
    );
  }
}

export default AnimalList;
