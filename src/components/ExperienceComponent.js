import React, { useRef, useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import WorkItem from './utility/WorkItem';
import emptyCV from './utility/emptyCV';
import { computeHeadingLevel } from '@testing-library/react';
const uuid = uuidv4();
const ExperienceInfo = forwardRef((props, ref) => {
  const [state, setState] = useState({
    workList: [
      <WorkItem 
        key={uuid}
        id={uuid}
        ref={(item) => { child.current.push(item) }} 
        emptyCV={emptyCV.work}
        onChildClick={deleteItem}
      />,
    ],
  });
  let child = useRef([]);
  // useEffect(() => {
    
  //     console.log('testr')
  //     // child.forEach((item) => {
  //     //   if(item !== null) item.preFill();
  //     // });
    
  // }, [state, isExample])

  useImperativeHandle(ref, () => ({
    clear: () => clearList(),
    generate: () => generatePreFill(),
  }));

  // function setRef(item) {
  //   child.current.push(item);
  // }
  //   const i = state.workList.indexOf(item);
  //   console.log(i)
  //   child.current[i] = item;
  // }
  function deleteItem(props) {
    const id = props.id;
    console.log(state)
    const newList = state.workList.filter((item) => item.props.id !== id);
    Promise.resolve()
        .then(() => {
          child.current.forEach((item, i) => {
            if(item === null || undefined ) return;
            const itemID = item.getID();
            if(itemID === id) {
              child.current.splice(i, 1);
            }
          })
          console.log(child.current);
        })
        .then(() => {
          setState(() => ({
            workList: newList,
          }))
        })
        // .then(() => {
        //   child.current.forEach((item, i) => {
        //     if(item === null) {
        //       child.current.splice(i, 1);
        //     }
        //   })
        //   console.log(child.current);
        // })
  }

  function generateID()  {
    return uuidv4();
  }
  function clearState() {
    console.log(child)
    child = [];
    setState(() => ({
      ...state,
      workList: [],
    }));
  }

  function clearList() {
    if(child.length === 0) return;
      child.forEach((item, i) => {
        if(item === null) return;
        console.log(i)
        item.current[i].clear();
    })
    console.log(child)
  }

  function generatePreFill() {
    const id1 = generateID();
    const id2= generateID();
    clearState();
    Promise.resolve()
      .then(() => {
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
        console.log('setState')
      })
      // .then(() => {
      //   child.forEach((item) => {
      //     if(item !== null) item.preFill();
      //   });
      //   console.log('success')
      // });
  }
  // ref={(item) => child.push(item)} 
  function createItem() {
    const uniqueID = uuidv4();
    const item = 
      <WorkItem 
        key={uniqueID}
        id={uniqueID}
        ref={(item) => { child.current.push(item) }}
        emptyCV={emptyCV.work}
        onChildClick={deleteItem}
      />;
    Promise.resolve()
    .then (() => {
      setState(() => ({
        workList: [...state.workList, item]
      }));
    })
  }

  function passData() {
    const workData = [];
    child.forEach((item) => {
      if(item === null) return;
      workData.push(item.state);
    });
    props.workData(workData);
  }
  // function initialLoad() {
  //   if(state.initialLoad)
  //   console.log('firstLoad');
  // }

  return (
    <div className="formGroup" id="ExperienceInfo">
    <h2>Experience</h2>

    { state.workList.map((item, i) => {
        return item
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