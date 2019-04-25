import React, { Component } from "react";
import {Link, Redirect} from "react-router-dom";

class AnimalList extends Component {
  constructor(props) {
    super(props);
    this.state = {animalData : []};
    console.log(this.props);
  }


  componentDidMount() {
    fetch("http://localhost:3000/" + this.props.species)
      .then(response => response.json())
      .then(jsonData => {
        console.log(jsonData);
        this.setState({ animalData : jsonData });
      })
        
      
  }

  render() {
    return (
      <div>
        {this.state.animalData.map(element => <Link to={`/dogs/${element.id}`}> {element.id} {element.name} {element.description} </Link>)}
      </div>
    );
  }
}

export default AnimalList;
