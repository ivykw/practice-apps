import React from 'react';
import TermList from './TermList.jsx';
import Search from './Search.jsx';
import Add from './Add.jsx';
import $ from 'jquery';
const axios = require('axios');

const url = '/glossary';
const test = {term: 'Hello', definition: 'Greeting'};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      terms: []
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  };

  handleAdd(word, def) {
    let termObj = {term: word, definition: def};
    axios.post(url, termObj)
    .then((response) => {
      this.setState({
        terms: response.data
      });
    })
    .catch((err) => {console.log('Error adding new word.')})
  };
  handleEdit(term) {
    let newDef = prompt('Please enter new definition.');
    axios.put(url,
      {term: term,
       definition: newDef})
    .then((response) => {
      this.setState({
        terms: response.data
      });
    })
    .catch((err) => {console.log('Error deleting.')})
  };
  handleDelete(term) {
    axios.delete(url, {data: {term: term}})
    .then((response) => {
      this.setState({
        terms: response.data
      });
    })
    .catch((err) => {console.log('Error deleting.')})
  };
  handleSearch(term) {
    axios.get(`glossary/${term}`)
    .then((response) => {
      console.log(this, response.data)
      this.setState({
        terms: response.data
      });
    })
    .catch((err) => {console.log('Error getting search.')})
  }
  componentDidMount() {
    axios.get(`glossary/`)
    .then((response) => {
      this.setState({
        terms: response.data
      })
    })
    .catch((err) => {console.log('Error fetching all.')})
  };
  render() {
    return (
      <div>
        <h1>
          Glossary
        </h1>
        <Add handleAdd={this.handleAdd}/>
        <Search handleSearch={this.handleSearch}/>
        <TermList terms={this.state.terms} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
      </div>
    );
  };
}

export default App;