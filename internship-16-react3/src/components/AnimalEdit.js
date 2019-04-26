import React, { Component } from "react";

class AnimalEdit extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", description: "" };

  }

  componentDidMount() {
    fetch("http://localhost:3000/" + this.props.species + '/' + this.props.match.params.id)
      .then(response => response.json())
      .then(jsonData => {
          this.setState({name: jsonData.name, description: jsonData.description});
          console.log(this.state);
      });
  }

  SetInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  SubmitAnimal = event => {
    event.preventDefault();
    fetch("http://localhost:3000/" + this.props.species + '/' + this.props.match.params.id, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        name: this.state.name,
        description: this.state.description
      })
    }).then(() => {
      return this.props.history.push("/" + this.props.species + '/' + this.props.match.params.id);
    });
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
            value={this.state.name}
          />
        </div>
        <div>
          <input
            name="description"
            type="text"
            placeholder="Enter description"
            onChange={this.SetInput}
            value={this.state.description}
          />
        </div>
        <div>
          <input type="submit" value="submit" />
        </div>
      </form>
    );
  }
}

export default AnimalEdit;
