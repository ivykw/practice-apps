import React from 'react';
import TermList from './TermList.jsx';
import Search from './Search.jsx';
import Add from './Add.jsx';
import $ from 'jquery';

const url = '/glossary';
const test = {term: 'Hello', definition: 'Greeting'};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      terms: []
    }
    // this.addTerm.bind(this);
    this.updateTerm.bind(this);
    this.deleteTerm.bind(this);
    this.getTerm.bind(this);
    this.handleAdd.bind(this);
    this.handleDelete.bind(this);
    this.handleEdit.bind(this);
  };
  // addTerm(termObj, callback) {
  //   $.post(url, termObj, function(data) {
  //     callback(JSON.parse(data));
  //   })
  // };
  updateTerm(upTerm, upDefinition, callback) {
    $.ajax({
      url: url,
      method: 'PUT',
      contentType: 'application/json',
      data: JSON.stringify({
        term: upTerm,
        definition: upDefinition}),
      success: callback(JSON.parse(data))
    })
  };

  deleteTerm(term, callback) {
    // term should be object {term: word}
    $.ajax({
      url: url,
      method: 'DELETE',
      data: JSON.stringify(term),
      success: callback(JSON.parse(data))
    })
  };
  getTerm(term, callback) {
    $.ajax({
      url: url,
      method: 'GET',
      data: JSON.stringify(term),
      success: function(data) {
        callback(JSON.parse(data));
      }
    })
  };
  handleAdd(word, def, callback) {
    event.preventDefault();
    let termObj = {term: word, definition: def};
    // why is this not a function
    $.ajax({
      url: url,
      method: 'POST',
      data: JSON.stringify(termObj),
      success: (data) => {
        console.log(this);
        this.setState({
          terms: data
        })
      }
    })
  };
  handleEdit() {

  };
  handleDelete(term) {
    deleteTerm(term, (data) => {
      this.setState({
        terms: data
      })
    })
  };
  componentDidMount() {
    this.getTerm({}, (data) => {
      this.setState({
        terms: data
      })
    })
  };
  render() {
    return (
      <div>
        <h1>
          Glossary
        </h1>
        <Add handleAdd={this.handleAdd}/>
        {/* <Search /> */}
        <TermList terms={this.state.terms} handleDelete={this.handleDelete} />
      </div>
    );
  };
}

export default App;