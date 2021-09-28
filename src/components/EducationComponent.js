import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import EducationItem from './utility/EducationItem';
import emptyCV from './utility/emptyCV';
const uuid = uuidv4();
class EducationInfo extends Component {
  constructor(props){
    super(props);
    this.child = [];
    this.state = {
      eduList: [
        <EducationItem 
          key={uuid} 
          ref={(child) => { this.child.push(child) }} 
          id={uuid} 
          emptyCV={emptyCV.education} 
          onChildClick={this.deleteItem}
        />
      ],
    }
  }
  // generatePreFill = () => {
  //   const uniqueID = uuidv4();
  //   this.child= [];
  //   this.props.exampleCV.forEach((item) => {
  //     const component = <EducationItem 
  //                         key={uniqueID}
  //                         ref={(child) => { this.child.push(child) }} 
  //                         id={uniqueID}
  //                         emptyCV={emptyCV.education}
  //                         onChildClick={this.deleteItem}
  //                       />;
  //     this.createItem();
  //     this.createItem();

  //   })
  //   console.log(this.state)
  // }
  deleteItem = (props) => {
    console.log(props)
    const id = props.id;
    console.log(id);
    this.child = this.child.filter((item) => item.props.id !== id);
    // const newList = this.state.eduList.filter((item) => item.props.id !== id);
    // this.setState({
    //   eduList: newList
    // });
  }
  createItem = () => {
    const uniqueID = uuidv4();
    const item = <EducationItem 
                    key={uniqueID}
                    ref={(child) => { this.child = [...this.child, child] }} 
                    id={uniqueID}
                    emptyCV={emptyCV.education}
                    onChildClick={this.deleteItem}
                  />;
    this.setState({
      eduList: [...this.state.eduList, item]
    })
    return false;
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
      <div className="formGroup" id="EducationInfo">
        <h2>Education</h2> 
        { this.state.eduList.map((item) => item) }
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

export default EducationInfo;