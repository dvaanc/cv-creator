import React, { Component } from 'react';
import './styles/App.css'
import GeneralInfo from './components/GeneralComponent.js';
import EducationInfo from './components/EducationComponent.js';
import ExperienceInfo from './components/ExperienceComponent';

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
              <ExperienceInfo/>
              <EducationInfo/>
              <button type="submit" class="button" id="submit">Generate CV</button>
              <button class="button" id="example">Example CV</button>
              <button class="button" id="reset">Clear CV</button>
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
