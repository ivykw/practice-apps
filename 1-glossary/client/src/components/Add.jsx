import React from 'react';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      definition: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    let target = event.target;
    let value = target.value;
    let name = target.name;
    this.setState({
      [name]: value
    })
  }
  handleSubmit(event) {
    event.preventDefault();
    let term = this.state.term;
    let def = this.state.definition;
    if (term.length === 0 || def.length === 0) {
      alert('Please fill out all fields');
    } else {
      this.props.handleAdd(term, def);
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Add Word
          <input type="text" name="term" onChange={this.handleChange} />
        </label>
        <label>
          Add Definition
          <input type="text" name="definition" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Add" />
      </form>
    )
  }
}

export default Add;