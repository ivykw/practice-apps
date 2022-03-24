import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
    this.handleChange.bind(this);
    this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      search: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSearch(this.state.search)
  }
  render () {
    return(
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <label>
          Search for word:
          <input type='text' onChange={(event) => this.handleChange(event)} />
        </label>
        <input type='Submit' defaultValue='Search' />
      </form>
    )
  }
}

export default Search;