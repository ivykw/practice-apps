import React from 'react';

class F3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card_num: '',
      card_expiry: '',
      bill_zip: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(event) {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value
    })
  }
  onSubmit(event) {
    event.preventDefault();
    this.props.handleF3Sub(this.state);
  }
  render() {
    return (
      <form onSubmit={this.onSubmit} >
        <div>
          <label>
            Credit Card Number
            <input type="text" name="card_num" onChange={this.onChange} />
          </label>
        </div>
        <div>
          <label>
            Card Expiration
            <input type="text" name="card_expiry" onChange={this.onChange} />
          </label>
        </div>
        <div>
          <label>
            CVV
            <input type="text" name="cvv" onChange={this.onChange} />
          </label>
        </div>
        <div>
          <label>
            Billing Zip Code
            <input type="text" name="bill_zip" onChange={this.onChange} />
          </label>
        </div>
        <button>Confirm Information</button>
      </form>
    )
  }
}
export default F3;