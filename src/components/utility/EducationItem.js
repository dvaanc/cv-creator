import React, { Component } from 'react'
class EducationItem extends Component {
  _isMounted = false;
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
  componentDidMount() {
    this._isMounted = true;
  }
  preFill = () => {
    this.setState({
      ...this.props.exampleCV
    })
  }
  clearState = () => {
    if(this._isMounted) {
      this.setState({
        ...this.props.emptyCV
      });
    }
  }
  handleClick = (e) => {
    e.preventDefault();
    this.props.onChildClick(this.props)
  }
  handleChange = (e) => {
    const val = e.target.value;
    const key = e.target.name;
    this.setState({ 
      ...this.state,
      [key]: val, 
    });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    return (
      <fieldset>
        <input 
        type="text"
        name="institution"
        id="institution"
        placeholder="Institution"
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
          <button onClick={this.handleClick} className="button" id="delete">Delete</button>
        </div>
    </fieldset>
    )
  }
}

export default EducationItem;