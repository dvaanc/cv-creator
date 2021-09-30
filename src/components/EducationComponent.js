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
  generateID = () => {
    return uuidv4();
  }
  clearState = () => {
    this.child= [];
    this.setState({ eduList: [] })
  }
  generatePreFill = () => {
    const id1 = this.generateID();
    const id2= this.generateID();
    this.clearState();
    this.setState({
      eduList: [
        <EducationItem
          key={id1} 
          id={id1} 
          ref={(child) => this.child.push(child)}
          emptyCV={emptyCV.education} 
          onChildClick={this.deleteItem}
        />,
        <EducationItem
          key={id2} 
          id={id2} 
          ref={(child) => this.child.push(child)}
          emptyCV={emptyCV.education} 
          onChildClick={this.deleteItem}
        />,
      ],
    }, () => {
      this.child.forEach((item) => {
        if(item !== null) {
          const i = this.child.indexOf(item)
          console.log(this.props.exampleCV[i])
        }
        return;    
      })
    });

    // this.child.forEach((item) => {
    //   const i = this.child.indexOf(item)
    //   console.log(i)
    //   // item.preFill(this.props.exampleCV[i])
    // })
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
  render() {
    return (
      <div className="formGroup" id="EducationInfo">
        <h2>Education</h2> 
        { this.state.eduList.map((item) => {
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