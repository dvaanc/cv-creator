import React, { useState, forwardRef, useImperativeHandle } from 'react'
const WorkItem = forwardRef((props, ref) => {
  const [state, setState] = useState ({
    position: '',
    company: '',
    city: '',
    startDate: '',
    endDate: '',
  })

  useImperativeHandle(ref, () => ({
    clear: () => clearState(),
    generate: () => preFill(),
    id: props.id,
  }));

  function preFill() {
    setState({
      ...props.exampleCV
    });
  }
  function getID() {
    return props.id;
  }

  function clearState() {
    console.log('success')
    setState(() => ({
      ...props.emptyCV
    }));
  }

  function handleClick(e) {
    e.preventDefault();
    props.onChildClick(props)
  }

  function handleChange(e) {
    const val = e.target.value;
    const key = e.target.name;
    setState({ 
      ...state,
      [key]: val, 
    });
  }
//   function componentWillUnmount() {
//   this._isMounted = false;
// }

  return (
    <fieldset>
      <input 
      type="text"
      name="position"
      id="position"
      placeholder="Position"
      onChange={handleChange}
      value={state.position}
      />
      <input 
      type="text"
      name="company"
      id="company"
      placeholder="Company"
      onChange={handleChange}
      value={state.company}
      />
      <input 
      type="text"
      name="city"
      id="city"
      placeholder="City"
      onChange={handleChange}
      value={state.city}
      />
      <p>Start date:</p>
      <input 
      type="month"
      name="startDate"
      id="startDate"
      onChange={handleChange}
      value={state.startDate}
      />
      <p>End date:</p>
      <input 
      type="month"
      name="endDate"
      id="endDate"
      onChange={handleChange}
      value={state.endDate}
      />
      <div className="buttonCluster">
        <button onClick={handleClick} className="button" id="delete">Delete</button>
      </div>
  </fieldset>
  )
}) 

export default WorkItem;

