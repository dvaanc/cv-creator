import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import WorkItem from './utility/WorkItem';
const uuid = uuidv4();
class ExperienceInfo extends Component {
  constructor() {
    super();
    this.state = {
      workList: [
        <WorkItem key={uuid} id={uuid} onChildClick={this.deleteItem}/>
      ],
    }
  }
  deleteItem = (props) => {
    const id = props.id;
    let filterArr = this.state.workList.filter((item) => item.props.id !== id);
    this.setState({workList: filterArr}, () => { console.log(this.state) });
  }
  createItem = (e) => {
    e.preventDefault();
    const uniqueID = uuidv4();
    const item = <WorkItem 
      key={uniqueID} 
      id={uniqueID}
      onChildClick={this.deleteItem}
      />;
    this.setState({
      workList: [...this.state.workList, item]
    },
    () => { console.log(this.state) }
    )
  }

  clearState = () => {
    this.setState({
      workList: [],
    });
  }
  render() {
    return (
      <div className="formGroup" id="ExperienceInfo">
      <h2>Experience</h2>
      {
          this.state.workList.map((item) => {
            return item
          })
        }
        <div>
          <button onClick={this.createItem} className="button" id="add">Add</button>
        </div>
      </div>
    )
  }
}

export default ExperienceInfo;

