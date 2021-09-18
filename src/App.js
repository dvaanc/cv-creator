import React, { Component } from 'react';
import Markup from './components/Markup.js';
import GeneralInfo from './components/GeneralComponent.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      val: '',
    };
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
        {Markup.header}
        <div>
    <form onSubmit={App.onSubmitCV}>
      <GeneralInfo/>
      <button type="submit">Submit</button>
    </form>
  </div>
        {Markup.footer}
      </div>
    )
  }
}

export default App;
