import React, { Component } from 'react';

class EducationInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      institution: '',
      city: '',
      qualification: '',
      startDate: '',
      endDate: '',
    }
  }

  render() {
    return (
      <div className="formGroup" id="EducationInfo">
        <fieldset>
          <h2>Education</h2>
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
          value={this.state.city}
          />

          <input 
          type="text"
          name="qualification"
          id="qualification"
          placeholder="Qualification"
          onChange={this.handleChange}
          value={this.state.qualification}
          />

          <p>Start date:</p>
          <input 
          type="month"
          name="startDate"
          id="startDate"
          onChange={this.handleChange}
          value={this.state.startDate}
          />
          <p>End date:</p>
          <input 
          type="month"
          name="endDate"
          id="endDate"
          onChange={this.handleChange}
          value={this.state.endDate}
          />
        </fieldset>
      </div>
        
    )
  }
}

export default EducationInfo;