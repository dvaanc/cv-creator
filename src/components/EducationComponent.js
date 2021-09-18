import React, { Component } from 'react';

class EducationInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      institution: '',
      city: '',
      certification: '',
      country: '',
      startDate: '',
      endDate: '',
    }
  }
  handleChange = (e) => {
    const val = e.target.value;
    const key = e.target.name;
    this.setState({ 
      ...this.state,
      [key]: val, 
    },
    () => { console.log(this.state) }
    );
  }
  render() {
    return (
      <div className="formGroupControl">
        <fieldset id="EducationInfo">
          <input 
          type="text"
          name="institution"
          id="institution"
          placeholder="institution"
          onChange={this.handleChange}
          value={this.state.institution}
          />

          <input 
          type="text"
          name="city"
          id="city"
          placeholder="City"
          onChange={this.handleChange}
          value={this.state.lastName}
          />

          <input 
          type="text"
          name="city"
          id="city"
          placeholder="Melbourne"
          onChange={this.handleChange}
          value={this.state.city}
          />

          <input 
          type="tel"
          name="phone"
          id="phone"
          placeholder="0416 498 312"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          onChange={this.handleChange}
          value={this.state.phone}
          />

          <input 
          type="text"
          name="email"
          id="email"
          placeholder="example@gmail.com"
          onChange={this.handleChange}
          value={this.state.email}
          />
        </fieldset>
      </div>
    )
  }
}

export default EducationInfo;