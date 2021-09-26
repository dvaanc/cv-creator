import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import EducationItem from './utility/EducationItem';
const uuid = uuidv4();
class EducationInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      eduList: [
        <EducationItem key={uuid} id={uuid} onChildClick={this.deleteItem}/>
      ],
    }
  }
  deleteItem = (props) => {
    const id = props.id;
    let filterArr = this.state.eduList.filter((item) => item.props.id !== id);
    this.setState({eduList: filterArr}, () => { console.log(this.state) });
  }
  createItem = (e) => {
    e.preventDefault();
    const uniqueID = uuidv4();
    const item = <EducationItem 
      key={uniqueID} 
      id={uniqueID}
      onChildClick={this.deleteItem}
      />;
    this.setState({
      eduList: [...this.state.eduList, item]
    },
    () => { console.log(this.state) }
    )
  }
  clearList = () => {
    this.setState({
      eduList: [],
    });
  }
  render() {
    return (
      <div className="formGroup" id="EducationInfo">
        <h2>Education</h2> 
        {
          this.state.eduList.map((item) => {
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

export default EducationInfo;