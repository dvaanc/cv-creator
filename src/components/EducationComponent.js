import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import EducationItem from './utility/EducationItem';
import emptyCV from './utility/emptyCV';
const uuid = uuidv4();
class EducationInfo extends Component {
  constructor(props){
    super(props);
    this.child = React.createRef();
    this.state = {
      eduList: [
        <EducationItem 
          key={uuid} 
          ref={this.child} 
          id={uuid} 
          emptyCV={emptyCV.education} 
          onChildClick={this.deleteItem}
        />
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
                    ref={this.child} 
                    id={uniqueID}
                    emptyCV={emptyCV.education}
                    onChildClick={this.deleteItem}
                    />;
    this.setState({
      eduList: [...this.state.eduList, item]
    },
    () => { console.log(this.state) }
    )
  }
  clearList = () => {
    this.child.current.clearState();
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