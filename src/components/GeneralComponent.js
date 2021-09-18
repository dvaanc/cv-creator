import React, { Component } from 'react';

class GeneralInfo extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      city: '',
      phone: '',
      email: '',
      photo: '',
      description: '',
    };
  }
  handleChange(e) {
    this.setState({val: e.target.value });
  }
  render() {
    return (
      <fieldset id="GeneralInfo">
        <label htmlFor="firstName">
          <p>First name</p>
          <input 
          type="text"
          name="firstName"
          id="fName"
          placeholder="John Doe"
          value=""
          />
        </label>
      </fieldset>
    )
  }
}

export default GeneralInfo;