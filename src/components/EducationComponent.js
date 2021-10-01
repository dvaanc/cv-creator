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
        />,
      ],
    }
  }
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
          exampleCV={this.props.exampleCV[0]} 
          onChildClick={this.deleteItem}
        />,
        <EducationItem
          key={id2} 
          id={id2} 
          ref={(child) => this.child.push(child)}
          emptyCV={emptyCV.education}
          exampleCV={this.props.exampleCV[1]} 
          onChildClick={this.deleteItem}
        />,
      ],
    }, () => {
      this.child.forEach((item) => {
        if(item !== null) item.preFill();
      });
    });
  }
  deleteItem = (props) => {
    const id = props.id
    const newList = this.state.eduList.filter((item) => item.props.id !== id);
    this.setState({ eduList: newList });
  }
  passData = () => {
    console.log('test')
    this.child.forEach((item) => {
      if(item === null) return
      console.log(item)
    })
    this.props.generalData(this.state)
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
  passData = () => {
    this.props.educationData(this.state)
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