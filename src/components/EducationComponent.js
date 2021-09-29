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
            id={uuid}
            ref={(child) => { this.child.push(child) }}
            emptyCV={emptyCV.education} 
            onChildClick={this.deleteItem}
        />
      ],
    }

  }
//   <EducationItem 
//   key={uuid} 
//   id={uuid}
//   emptyCV={emptyCV.education} 
//   onChildClick={this.deleteItem}
// />
  // (child) => { this.child.push(child) }
  generatePreFill = () => {
    this.child= [];
    this.setState({ eduList: []})
    console.log(this.props.exampleCV.length)
    // this.props.exampleCV.forEach(() => this.createItem());
    for(let i; i <= this.props.exampleCV.length; i+=1) this.createItem();
    for(let i; i < this.child.length; i+=1) this.child[i].preFill(this.props.exampleCV[i]); 
    console.log(this.state)
  }
  deleteItem = (props) => {
    const id = props.id
    const newList = this.state.eduList.filter((item) => item.props.id !== id);
    this.setState({ eduList: newList }, () => { console.log(this.state) });
      this.child.forEach((item) => {
        if(item.props.id === id) {
          const index = this.child.indexOf(item);
          this.child.splice(index, 1)
        }
      })
  }
  createItem = () => {
    const uniqueID = uuidv4();
    const item = 
      <EducationItem
        key={uniqueID} 
        id={uniqueID}
        ref={(child) => this.child.push(child)}
        emptyCV={emptyCV.education} 
        onChildClick={this.deleteItem}
      />;
    this.setState({
      eduList: [...this.state.eduList, item]
    })
  }
  clearList = () => {
    if(this.child.length === 0) return;
      this.child.forEach((item) => {
        if(item === null) return;
        item.clearState();
      })
  }
  setRef = (element) => {
    this.child = element;
  }
  render() {
    return (
      <div className="formGroup" id="EducationInfo">
        <h2>Education</h2> 
        { this.state.eduList.map((item, index) => {
          return item;
        })

          }
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