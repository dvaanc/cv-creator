import React, { Component } from 'react';

class ExperienceInfo extends Component {
  constructor() {
    super();
    this.state = {
      position: '',
      company: '',
      city: '',
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
      <div className="formGroup" id="ExperienceInfo">
        <fieldset>
          <h2>Experience</h2>
          <input 
          type="text"
          name="position"
          id="position"
          placeholder="Position"
          onChange={this.handleChange}
          value={this.state.position}
          />

          <input 
          type="text"
          name="company"
          id="company"
          placeholder="Company"
          onChange={this.handleChange}
          value={this.state.company}
          />

          <input 
          type="text"
          name="city"
          id="city"
          placeholder="City"
          onChange={this.handleChange}
          value={this.state.city}
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

export default ExperienceInfo;

