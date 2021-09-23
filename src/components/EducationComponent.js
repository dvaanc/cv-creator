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
          <div className="buttonCluster">
            <button className="button" id="delete">Delete</button>
            <button className="button" id="add">Add</button>
          </div>
        </fieldset>
      </div>
        
    )
  }
}

export default EducationInfo;