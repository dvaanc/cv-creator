import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import WorkItem from './utility/WorkItem';
import emptyCV from './utility/emptyCV';
const uuid = uuidv4();
class ExperienceInfo extends Component {
  constructor() {
    super();
    this.child = [];
    this.state = {
      workList: [
        <WorkItem 
          key={uuid}
          ref={(child) => { this.child.push(child) }} 
          id={uuid} 
          emptyCV={emptyCV.work}
          onChildClick={this.deleteItem}
        />
      ],
    }
  }
  deleteItem = (props) => {
    const id = props.id;
    this.child = this.child.filter((item) => item.props.id !== id);
    let newList = this.state.workList.filter((item) => item.props.id !== id);
    this.setState({workList: newList}, () => { console.log(this.state) });
  }
  createItem = (e) => {
    e.preventDefault();
    const uniqueID = uuidv4();
    const item = <WorkItem 
                    key={uniqueID}
                    ref={(child) => { this.child.push(child) }} 
                    id={uniqueID}
                    emptyCV={emptyCV.work}
                    onChildClick={this.deleteItem}
                  />;
    this.setState({
      workList: [...this.state.workList, item]
    })
  }
  clearList = () => {
    if(this.child.length === 0) return;
      this.child.forEach((item) => {
        if(item === null) return;
        item.clearState();
      })
    }
  render() {
    return (
      <div className="formGroup" id="ExperienceInfo">
      <h2>Experience</h2>
      { this.state.workList.map((item) => item) }
        <div>
          <button onClick={this.createItem} className="button" id="add">Add</button>
        </div>
      </div>
    )
  }
}

export default ExperienceInfo;

