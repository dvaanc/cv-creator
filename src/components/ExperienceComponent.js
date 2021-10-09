import React, { useRef, useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import WorkItem from './utility/WorkItem';
import emptyCV from './utility/emptyCV';
const uuid = uuidv4();
const ExperienceInfo = forwardRef((props, ref) => {
  let child = useRef([]);
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
    clear: () => clearList(),
    generate: () => generatePreFill(),
  }));
  


  function deleteItem(e) {
    e.preventDefault();
    console.log(e.target.parentNode.parentNode)
    // const id = props.id;
    // const newList = state.workList.filter((item) => item.props.id !== id);
    // Promise.resolve()
    //   .then(() => {
    //     child.current = child.current.filter((item) => {
    //       // eslint-disable-next-line array-callback-return
    //       if(item === null || undefined) return;
    //       return item.id !== id;
    //     })
    //     console.log(child.current)
    //     })
    //   .then(() => {
    //     setState(() => ({
    //       workList: newList,
    //     }))
    //   })
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
    const arr = state.workList;
    arr.forEach((item) => {
      item = {
        ...emptyCV,
      }
    });
    setState(() => ({ workList: [...arr] }))
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
              ref={(item) => child.current.push(item)}
              emptyCV={emptyCV.work}
              exampleCV={props.exampleCV[0]} 
              onChildClick={deleteItem}
            />,
            <WorkItem
              key={id2} 
              id={id2} 
              ref={(item) => child.current.push(item)}
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