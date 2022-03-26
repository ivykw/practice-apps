import React from 'react';
import Welcome from './Welcome.jsx';
import F1 from './F1.jsx';
import F2 from './F2.jsx';
import F3 from './F3.jsx';
import Confirmation from './F3.jsx';
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      welcome: true,
      F1: false,
      F2: false,
      F3: false,
      confirmation: false,
      name: null,
      email: null,
      password: null,
      address1: null,
      address2: null,
      city: null,
      state: null,
      zip: null,
      phone: null,
      card_num: null,
      card_expiry: null,
      cvv: null,
      bill_zip: null
    }
    this.handleBegin = this.handleBegin.bind(this);
    this.handleF1Sub = this.handleF1Sub.bind(this);
    this.handleF2Sub = this.handleF2Sub.bind(this);
    this.handleF3Sub = this.handleF3Sub.bind(this);
    this.handleReturn = this.handleReturn.bind(this);
  }
  handleBegin(event) {
    event.preventDefault();
    this.setState({
      welcome: false,
      F1: true
    });
  };
  handleF1Sub(state) {
    this.setState({
      name: state.name,
      email: state.email,
      password: state.password,
      F1: false,
      F2: true
    })
  };
  handleF2Sub(state) {
    this.setState({
      address1: state.address1,
      address2: state.address2,
      city: state.city,
      state: state.state,
      zip: state.zip,
      phone: state.phone,
      F2: false,
      F3: true
    })
  };
  handleF3Sub(state) {
    this.setState({
      card_num: state.card_num,
      card_expiry: state.card_expiry,
      cvv: state.cvv,
      bill_zip: state.bill_zip,
      F3: false,
      confirmation: true
    })
  };
  handleReturn() {
    let data = this.state;
    console.log(data)
    axios.post('/checkout', data)
    .then(() => {
      console.log('Data posted to server!');
      this.setState({
        welcome: true,
        F1: false,
        F2: false,
        F3: false,
        confirmation: false,
        name: null,
        email: null,
        password: null,
        address1: null,
        address2: null,
        city: null,
        state: null,
        zip: null,
        phone: null,
        card_num: null,
        card_expiry: null,
        cvv: null,
        bill_zip: null
      })
    })
    .catch((err) => {
      console.log(err);
    })
  };
  render() {
    let page;
    if (this.state.welcome === true) {
      page = <Welcome handleBegin={this.handleBegin} />;
    }
    if (this.state.F1 === true) {
      page = <F1 handleF1Sub={this.handleF1Sub} />
    }
    if (this.state.F2 === true) {
      page = <F2 handleF2Sub={this.handleF2Sub} />
    }
    if (this.state.F3 === true) {
      page = <F3 handleF2Sub={this.handleF2Sub} />
    }
    if (this.state.confirmation === true) {
      page = <Confirmation data={this.state} handleReturn={this.handleReturn} />
    }
    return (
      <div>
        {page}
      </div>
    )
  }
}

export default App;