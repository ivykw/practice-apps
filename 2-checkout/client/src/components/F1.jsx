import React from 'react';

class F1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
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
    console.log(this.state)
    this.props.handleF1Sub(this.state);
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            Full Name
            <input type="text" name="name" onChange={this.onChange} />
          </label>
        </div>
        <div>
          <label>
            Email
            <input type="text" name="email" onChange={this.onChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input type="text" name="password" onChange={this.onChange} />
          </label>
        </div>
        <button>Next</button>
      </form>
      )
  }
}
  export default F1;