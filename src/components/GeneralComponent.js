import React, { useState, forwardRef, useImperativeHandle, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../styles/App.css'
const uuid = uuidv4();

const GeneralInfo = forwardRef((props, ref) => {
  const file = useRef();
  const [state, setState] = 
  useState({
    firstName: '',
    lastName: '',
    occupation: '',
    city: '',
    phone: '',
    email: '',
    photoName: '',
    photoSrc: '',
    description: '',
    id: uuid,
  });
  useImperativeHandle(ref, () => ({
    clearState: () => clearState(),
    prefill: () => prefill(),
    passDataToProps: () => passDataToProps(),
  }));
  function handleChange(e) {
    const val = e.target.value;
    const key = e.target.name;
    setState({ 
      ...state,
      [key]: val, 
    });
  }
  function handleFileChange(e) {
    e.preventDefault();
    const name = e.target.files[0].name;  
    const src = e.target.files[0];
    console.log(e.target.files)
    console.log(src)
    if(e.target.files && e.target.files[0]) {
        setState({ 
          ...state,
          photoName: name,
          photoSrc: URL.createObjectURL(src),
        })
    }
  }
  function clearState() {
    return setState({...props.emptyCV});
  }
  function prefill() {
    return setState({...props.exampleCV})
  }
  function passDataToProps() {
    return props.generalData(state)
  }
  return (
    <div className="formGroup" id="GeneralInfo">
      <fieldset>
      <h2>Personal Information</h2>
        <input 
        type="text"
        name="firstName"
        id="firstName"
        placeholder="First name"
        onChange={handleChange}
        value={state.firstName}
        />

        <input 
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Last name"
        onChange={handleChange}
        value={state.lastName}
        />
        <input 
        type="text"
        name="occupation"
        id="occupation"
        placeholder="Occupation"
        onChange={handleChange}
        value={state.occupation}
        />

        <input 
        type="text"
        name="city"
        id="city"
        placeholder="City"
        onChange={handleChange}
        value={state.city}
        />

        <input 
        type="tel"
        name="phone"
        id="phone"
        placeholder="Phone"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        onChange={handleChange}
        value={state.phone}
        />

        <input 
        type="text"
        name="email"
        id="email"
        placeholder="Email"
        onChange={handleChange}
        value={state.email}
        />

        <p>Photo:</p>
        <input
        ref={file} 
        type="file"
        name="photo"
        id="photo"
        accept="image/*"
        onChange={handleFileChange}
        />
        <div className="fileUpload">
        <input 
        type="button" 
        id="uploadFile" 
        name="uploadFile" 
        value="+"
        onClick={() => file.current.click()}
        />
        <p>{state.photoName}</p>
        </div>

        <textarea 
        name="description"
        id="description"
        placeholder="Description"
        onChange={handleChange}
        value={state.description}
        />
      </fieldset>
    </div>
  )
}) 

export default GeneralInfo;