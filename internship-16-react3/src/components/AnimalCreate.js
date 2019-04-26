import React, { Component } from "react";

class AnimalCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", description: "" };
  }

  SetInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  SubmitAnimal = event => {
    event.preventDefault();
    fetch("http://localhost:3000/" + this.props.species, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        name: this.state.name,
        description: this.state.description
      })
    })
      .then(response => response.json())
      .then( (response) =>
        this.props.history.push("/" + this.props.species + "/" + response.id)
      );
  };

  render() {
    return (
      <form onSubmit={this.SubmitAnimal}>
        <div>
          <input
            name="name"
            type="text"
            placeholder="Enter name"
            onChange={this.SetInput}
          />
        </div>
        <div>
          <input
            name="description"
            type="text"
            placeholder="Enter description"
            onChange={this.SetInput}
          />
        </div>
        <div>
          <input type="submit" value="submit" />
        </div>
      </form>
    );
  }
}

export default AnimalCreate;
