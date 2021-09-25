import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import EducationItem from './utility/EducationItem';
class EducationInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      itemList: [
        
      ],
    }
  }
  deleteItem = (e, id) => {
    e.preventDefault();
  }
  createItem = (e) => {
    e.preventDefault();
    const uniqueID = uuidv4();
    const item = {
      id: uniqueID,
      institution: '',
      city: '',
      qualification: '',
      startDate: '',
      endDate: '',
    }
    this.setState({
      itemList: [...this.state.itemList, item]
    },
    // () => { console.log(this.state) }
    )
  }
  clearState = () => {
    this.setState({
      ...this.props.emptyCV
    });
  }
  handleChange = (e) => {
    const val = e.target.value;
    const key = e.target.name;
    this.setState({ 
      ...this.state,
      [key]: val, 
    },
    // () => { console.log(this.state) }
    );
  }
  render() {
    return (
      <div className="formGroup" id="EducationInfo">
        <h2>Education</h2>      
        {
          this.state.itemList.map((item) => {
            const i = this.state.itemList.indexOf(item)
            console.log(this.state)
            console.log(item);
            return (
              <fieldset>
                <input 
                type="text"
                name="institution"
                id={item.id}
                placeholder="institution"
                onChange={this.handleChange}
                value={this.state.institution}
                />

                <input 
                type="text"
                name="city"
                id={item.id}
                placeholder="City"
                onChange={this.handleChange}
                value={this.state.city}
                />

                <input 
                type="text"
                name="qualification"
                id={item.id}
                placeholder="Qualification"
                onChange={this.handleChange}
                value={this.state.qualification}
                />

                <p>Start date:</p>
                <input 
                type="month"
                name="startDate"
                id={item.id}
                onChange={this.handleChange}
                value={this.state.startDate}
                />
                <p>End date:</p>
                <input 
                type="month"
                name="endDate"
                id={item.id}
                onChange={this.handleChange}
                value={this.state.endDate}
                />
                <div className="buttonCluster">
                  <button className="button" id="delete">Delete</button>
                </div>
              </fieldset>
            )
          })
        }
        <EducationItem />
        {/* <fieldset>
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
            <button onClick={this.deleteItem} className="button" id="delete">Delete</button>
          </div>
        </fieldset> */}
        <div>
          <button onClick={this.createItem} className="button" id="add">Add</button>
        </div>
      </div>

        
    )
  }
}

export default EducationInfo;