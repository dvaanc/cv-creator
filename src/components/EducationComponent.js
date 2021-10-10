import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { v4 as uuidv4 } from 'uuid';
const uuid = uuidv4();
const EducationInfo = forwardRef((props, ref) => {
  const [state, setState] = 
  useState({
    eduList: [
      {
        institution: '',
        city: '',
        qualification: '',
        startDate: '',
        endDate: '',
        id: uuid,
      }
    ],
  })
  useImperativeHandle(ref, () => ({
    clearList: () => clearList(),
    generatePrefill: () => generatePrefill(),
    passDataToProps: () => passDataToProps(),
  }));
  function handleChange(e) {
    const index = e.target.parentNode.id;
    const val = e.target.value;
    const key = e.target.name;
    state.eduList[index] = {
      ...state.eduList[index],
      [key]: val,
    };
    setState(() => ({ eduList: [...state.eduList] }))
  }
  function createItem() {
    const uniqueID = uuidv4();
    const item = {
      institution: '',
      city: '',
      qualification: '',
      startDate: '',
      endDate: '',
      id:[uniqueID],
    }
    setState(() => ({
      eduList: [...state.eduList, item]
    }));
  }
  function deleteItem(e) {
    e.preventDefault();
    const index = e.target.parentNode.parentNode.id;
    const newArr = [...state.eduList];
    newArr.splice(index, 1);
    setState(() => ({ eduList: [...newArr] }))
  }
  function clearList() {
    const clearedArr = [];
    state.eduList.forEach((item) => {
      item = {
        ...item,
        ...props.emptyCV,
      };
      clearedArr.push(item);
    });
    setState(() => ({ eduList: [...clearedArr] }))
  }
  function clearState() {
    setState(() => ({ eduList: [] }));
  }
  function generatePrefill() {
    const id0 = generateID();
    const id1 = generateID();
    console.log(props.exampleCV)
    clearState();
      setState(() => ({
        eduList: [
          {
            ...props.exampleCV[0],
            id: id0,
          },
          {
            ...props.exampleCV[1],
            id: id1,
          },
        ],
      }));
  }
  function generateID()  {
    return uuidv4();
  }
  function passDataToProps() {
    return props.educationData(state.eduList)
  }  
  return (
    <div className="formGroup" id="EducationInfo">
      <h2>Education</h2> 
      { state.eduList.map((item, i) => {
        return (
          <fieldset key={item.id} id={i}>
            <input 
            type="text"
            name="institution"
            id="institution"
            placeholder="Institution"
            onChange={handleChange}
            value={item.institution}
            />
            <input 
            type="text"
            name="city"
            id="city"
            placeholder="City"
            onChange={handleChange}
            value={item.city}
            />
            <input 
            type="text"
            name="qualification"
            id="qualification"
            placeholder="Qualification"
            onChange={handleChange}
            value={item.qualification}
            />
            <p>Start date:</p>
            <input 
            type="month"
            name="startDate"
            id="startDate"
            onChange={handleChange}
            value={item.startDate}
            />
            <p>End date:</p>
            <input 
            type="month"
            name="endDate"
            id="endDate"
            onChange={handleChange}
            value={item.endDate}
            />
            <div className="buttonCluster">
              <button onClick={deleteItem} className="button" id="delete">Delete</button>
            </div>
          </fieldset>
        );
      })
      }
      <div>
        <button onClick=
          {(e) => {
            e.preventDefault();
            createItem();
          }} 
          className="button" 
          id="add">
          Add
        </button>
      </div>
    </div>
  )
}) 

export default EducationInfo;