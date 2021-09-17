import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      val: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitCV = this.onSubmitCV.bind(this);
  }
  handleChange(e) {
    this.setState({val: e.target.value });
  }
  onSubmitCV(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div className="app">

      </div>
    )
  }
}

export default App;
