import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import WorkItem from './utility/WorkItem';
import emptyCV from './utility/emptyCV';
const uuid = uuidv4();
class ExperienceInfo extends Component {
  constructor(props) {
    super(props);
    this.child = [];
    this.state = {
      workList: [
        <WorkItem 
          key={uuid}
          id={uuid} 
          ref={(child) => { this.child.push(child) }} 
          emptyCV={emptyCV.work}
          onChildClick={this.deleteItem}
        />,
      ],
    }
  }
  generateID = () => {
    return uuidv4();
  }
  clearState = () => {
    this.child= [];
    this.setState({ workList: [] });
  }
  deleteItem = (props) => {
    const id = props.id
    const newList = this.state.workList.filter((item) => item.props.id !== id);
    this.setState({ workList: newList }, () => { console.log(this.state) });
  }
  clearList = () => {
    if(this.child.length === 0) return;
      this.child.forEach((item) => {
        if(item === null) return;
        item.clearState();
    })
  }
  passData = () => {
    this.props.generalData(this.state)
  }
  generatePreFill = () => {
    const id1 = this.generateID();
    const id2= this.generateID();
    this.clearState();
    this.setState({
      workList: [
        <WorkItem
          key={id1} 
          id={id1} 
          ref={(child) => this.child.push(child)}
          emptyCV={emptyCV.work}
          exampleCV={this.props.exampleCV[0]} 
          onChildClick={this.deleteItem}
        />,
        <WorkItem
          key={id2} 
          id={id2} 
          ref={(child) => this.child.push(child)}
          emptyCV={emptyCV.work}
          exampleCV={this.props.exampleCV[1]} 
          onChildClick={this.deleteItem}
        />,
      ],
    }, () => {
      this.child.forEach((item) => {
        if(item !== null) item.preFill();
      });
      this.passData();
    });
  }
  createItem = () => {
    const uniqueID = uuidv4();
    const item = 
      <WorkItem 
        key={uniqueID}
        id={uniqueID}
        ref={(child) => this.child.push(child)} 
        emptyCV={emptyCV.work}
        onChildClick={this.deleteItem}
      />;
    this.setState({
      workList: [...this.state.workList, item]
    })
  }
  render() {
    return (
      <div className="formGroup" id="ExperienceInfo">
      <h2>Experience</h2>
      { this.state.workList.map((item) => item) }
        <div>
        <button onClick={(e) => {
            e.preventDefault();
            this.createItem();
          }} className="button" id="add">Add</button>
        </div>
      </div>
    )
  }
}

export default ExperienceInfo;

