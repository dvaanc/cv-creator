import React, { Component } from 'react';
import '../styles/App.css'


class GeneralInfo extends Component {
  constructor(props) {
    super(props);
    this.file = React.createRef();
    this.state = {
      firstName: '',
      lastName: '',
      occupation: '',
      city: '',
      phone: '',
      email: '',
      photoName: '',
      photoSrc: '',
      description: '',
    };
  }
  handleFileChange = (e) => {
    e.preventDefault();
    const name = e.target.files[0].name;  
    const src = e.target.files[0];
    if(e.target.files && e.target.files[0]) {
        this.setState({ 
          ...this.state,
          photoName: name,
          photoSrc: src,
        })
    }
  }
  clearState = () => {
    this.setState({
      ...this.props.emptyCV,
    });
  }
  preFill = () => {
    this.setState({
      ...this.props.exampleCV,
    })
  }
  handleChange = (e) => {
    const val = e.target.value;
    const key = e.target.name;
    this.setState({ 
      ...this.state,
      [key]: val, 
    });
  }
  passData = () => {
    this.props.generalData(this.state)
  }
  render() {
    return (
      <div className="formGroup" id="GeneralInfo">
        <fieldset>
        <h2>Personal Information</h2>
          <input 
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First name"
          onChange={this.handleChange}
          value={this.state.firstName}
          />

          <input 
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last name"
          onChange={this.handleChange}
          value={this.state.lastName}
          />
          <input 
          type="text"
          name="occupation"
          id="occupation"
          placeholder="Occupation"
          onChange={this.handleChange}
          value={this.state.occupation}
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
          type="tel"
          name="phone"
          id="phone"
          placeholder="Phone"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          onChange={this.handleChange}
          value={this.state.phone}
          />

          <input 
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          onChange={this.handleChange}
          value={this.state.email}
          />

          <p>Photo:</p>
          <input
          ref={this.file} 
          type="file"
          name="photo"
          id="photo"
          accept="image/*"
          onChange={this.handleFileChange}
          />
          <div className="fileUpload">
          <input 
          type="button" 
          id="uploadFile" 
          name="uploadFile" 
          value="+"
          onClick={() => this.file.current.click()}
          />
          <p>{this.state.photoName}</p>
          </div>

          <textarea 
          name="description"
          id="description"
          placeholder="Description"
          onChange={this.handleChange}
          value={this.state.description}
          />
        </fieldset>
      </div>
    )
  }
}

export default GeneralInfo;