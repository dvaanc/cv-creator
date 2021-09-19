import React, { Component } from 'react';
import './styles/App.css'
import GeneralInfo from './components/GeneralComponent.js';
import EducationInfo from './components/EducationComponent.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      val: '',
    };
  }

  onSubmitCV(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div className="app">
        <header>
          <h1>CV CREATOR</h1>
        </header>
        <div className="container">
          <div className="formContainer">
            <form>
              <GeneralInfo/>
              <EducationInfo/>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="previewContainer">

          </div>
        </div>
        <footer>
          <p>Copyright © 2021. Web Design by Danny Cao.</p>
        </footer>
      </div>
    )
  }
}

export default App;
