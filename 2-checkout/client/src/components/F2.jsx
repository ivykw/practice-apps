import React from 'react';

class F2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address1: '',
      address2: null,
      city: '',
      state: '',
      zip: '',
      phone: ''
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
    this.props.handleF2Sub(this.state)
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            Address Line 1
            <input name="address1" type="text" onChange={this.onChange} />
          </label>
        </div>
        <div>
          <label>
            Address Line 2
            <input name="address2" type="text" onChange={this.onChange} />
          </label>
        </div>
        <div>
          <label>
            City
            <input name="city" type="text" onChange={this.onChange} />
          </label>
        </div>
        <div>
          <label>
            State
            <input name="state" type="text" onChange={this.onChange} />
          </label>
        </div>
        <div>
          <label>
            Zip Code
            <input name="zip" type="text" onChange={this.onChange} />
          </label>
        </div>
        <div>
          <label>
            Phone Number
            <input name="phone" type="text" onChange={this.onChange} />
          </label>
        </div>
        <button>Next</button>
      </form>
    )
  }
}
export default F2;