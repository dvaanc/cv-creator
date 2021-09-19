import React, { Component } from 'react'

class PreviewComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: '',
    };
  }
  handleChange = (e) => {
    const val = e.target.value;
    const key = e.target.name;
    this.setState({ 
      ...this.state,
      [key]: val, 
    },
    () => { console.log(this.state) }
    );
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default PreviewComponent;
