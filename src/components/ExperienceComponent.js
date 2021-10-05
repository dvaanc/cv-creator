import React, { useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import WorkItem from './utility/WorkItem';
import emptyCV from './utility/emptyCV';
const uuid = uuidv4();
const ExperienceInfo = forwardRef((props, ref) => {
  let child = [];
  let isExample = false;
  const [state, setState] = useState({
    workList: [
      <WorkItem 
        key={uuid}
        id={uuid} 
        ref={(item) => { child.push(item) }} 
        emptyCV={emptyCV.work}
        onChildClick={deleteItem}
      />,
    ],
  });
  useEffect(() => {
    if(isExample) {
      console.log('testr')
      child.forEach((item) => {
        if(item !== null) item.preFill();
      });
    }
  }, [state, isExample])
  useImperativeHandle(ref, () => ({
    clearList: () => clearList(),
    generatePreFill: () => generatePreFill(),
  }));

  function deleteItem(props) {
    const id = props.id;
    const newList = state.workList.filter((item) => item.props.id !== id);
    child = child.filter((item) => {
      // eslint-disable-next-line array-callback-return
      if(item === null) return;
      return item.props.id !== id;
    });
    setState(() => ({
      workList: newList,
    }));
  }

  function generateID()  {
    return uuidv4();
  }
  function clearState() {
    child = [];
    setState(() => ({
      workList: [],
    }));
  }

  function clearList() {
    console.log(props)
    if(child.length === 0) return;
      child.forEach((item) => {
        if(item === null) return;
        item.clearState();
    })
  }

  function generatePreFill() {
    const id1 = generateID();
    const id2= generateID();
    clearState();
    isExample = true;
    setState(() => ({
      workList: [
        <WorkItem
          key={id1} 
          id={id1} 
          ref={(item) => child.push(item)}
          emptyCV={emptyCV.work}
          exampleCV={props.exampleCV[0]} 
          onChildClick={deleteItem}
        />,
        <WorkItem
          key={id2} 
          id={id2} 
          ref={(item) => child.push(item)}
          emptyCV={emptyCV.work}
          exampleCV={props.exampleCV[1]} 
          onChildClick={deleteItem}
        />,
      ],
    }));
  }

  function createItem() {
    const uniqueID = uuidv4();
    const item = 
      <WorkItem 
        key={uniqueID}
        id={uniqueID}
        ref={(item) => child.push(item)} 
        emptyCV={emptyCV.work}
        onChildClick={deleteItem}
      />;
    setState(() => ({
      workList: [...state.workList, item]
    }))
  }

  function passData() {
    const workData = [];
    child.forEach((item) => {
      if(item === null) return;
      workData.push(item.state);
    });
    props.workData(workData);
  }

  return (
    <div className="formGroup" id="ExperienceInfo">
    <h2>Experience</h2>
    { state.workList.map((item) => item) }
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