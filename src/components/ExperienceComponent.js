import React, { useRef, useState, forwardRef, useImperativeHandle, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import WorkItem from './utility/WorkItem';
import emptyCV from './utility/emptyCV';
const uuid = uuidv4();
const ExperienceInfo = forwardRef((props, ref) => {
  const [state, setState] = useState({
    workList: [
      {
        position: '',
        company: '',
        city: '',
        startDate: '',
        endDate: '',
        id: uuid,
      },
    ],
  });

  useImperativeHandle(ref, () => ({
    clearList: () => clearList(),
    generatePrefill: () => generatePrefill(),
    passDataToProps: () => passDataToProps(),
  }));
  


  function deleteItem(e) {
    e.preventDefault();
    const index = e.target.parentNode.parentNode.id;
    const newArr = [...state.workList];
    newArr.splice(index, 1);
    setState(() => ({ workList: [...newArr] }))
  }

  function generateID()  {
    return uuidv4();
  }
  function clearState() {
    setState(() => ({ workList: [] }));
  }

  function clearList() {
    const clearedArr = [];
    state.workList.forEach((item) => {
      item = {
        ...item,
        ...props.emptyCV,
      };
      clearedArr.push(item);
    });
    setState(() => ({ workList: [...clearedArr] }))
  }

  function generatePrefill() {
    const id0 = generateID();
    const id1 = generateID();
    const id2 = generateID();
    console.log(props)
    clearState();
      setState(() => ({
        workList: [
          {
            ...props.exampleCV[0],
            id:id0,
          },
          {
            ...props.exampleCV[1],
            id:id1,
          },
          {
            ...props.exampleCV[2],
            id:id2,
          },
        ],
      }));
  }

  function createItem() {
    const uniqueID = uuidv4();
    const item = {
      position: '',
      company: '',
      city: '',
      startDate: '',
      endDate: '',
      id:[uniqueID],
    }
      setState(() => ({
        workList: [...state.workList, item]
      }));
  }
  function passDataToProps() {
    props.workData(state.workList)
  }  
  function handleChange(e) {
    const index = e.target.parentNode.id;
    const val = e.target.value;
    const key = e.target.name;

    state.workList[index] = {
      ...state.workList[index],
      [key]: val,
    }
      setState(() => ({ workList: [...state.workList] }))
  }
  return (
    <div className="formGroup" id="ExperienceInfo">
    <h2>Experience</h2>
    { 
      state.workList.map((item, i) => {
        return (
      <fieldset key={item.id} id={i}>
        <input 
        type="text"
        name="position"
        id="position"
        placeholder="Position"
        onChange={handleChange}
        value={item.position}
        />
        <input 
        type="text"
        name="company"
        id="company"
        placeholder="Company"
        onChange={handleChange}
        value={item.company}
        />
        <input 
        type="text"
        name="city"
        id="city"
        placeholder="City"
        onChange={handleChange}
        value={item.city}
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
      )
      })
    }
      <div>
      <button onClick={(e) => {
          e.preventDefault();
          createItem();
        }} className="button" id="add">Add</button>
      </div>
    </div>
  )
})

export default ExperienceInfo;