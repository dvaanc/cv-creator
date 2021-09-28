import React, { Component } from 'react';
import './styles/App.css'
import GeneralInfo from './components/GeneralComponent.js';
import EducationInfo from './components/EducationComponent.js';
import ExperienceInfo from './components/ExperienceComponent';
import PreviewComponent from './components/PreviewComponent';
import emptyCV from './components/utility/emptyCV';
import exampleCV from './components/utility/exampleCV';
class App extends Component {
  constructor(props) {
    super(props);
    this.general = React.createRef();
    this.education = React.createRef();
    this.work = React.createRef();
    this.preview = React.createRef();
    this.state = {
      val: '',
    };
  }
  onClearCV = (e) => {
    e.preventDefault();
    this.general.current.clearState();
    this.education.current.clearList();
    this.work.current.clearList();
  }
  onExampleCV = (e) => {
    e.preventDefault();
    this.general.current.exampleCV();
  }
  onSubmitCV = (e) => {
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
              <GeneralInfo
                ref={this.general}
                emptyCV={emptyCV.general}
                exampleCV={exampleCV.general} 
              />
              <EducationInfo 
                ref={this.education}
                emptyCV={emptyCV.education}
                exampleCV={exampleCV.education}
              />
              <ExperienceInfo 
                ref={this.work}
                emptyCV={emptyCV.work}
                exampleCV={exampleCV.work}
              />
              <div className="buttonCluster">
                <button className="button" id="reset" onClick={this.onClearCV}>Clear CV</button>
                <button className="button" id="example" onClick={this.onExampleCV}>Example CV</button>
                <button 
                type="submit" 
                className="button" 
                id="submit"
                onClick={this.onSubmitCV}>
                Generate CV
                </button>
              </div>

            </form>
          </div>
          <PreviewComponent ref={this.preview}/>
        </div>
        <footer>
          <p>Copyright © 2021. Web Design by Danny Cao.</p>
        </footer>
      </div>
    )
  }
}

export default App;

/* 
- submit Onclick, call a function that will make the three components call their method to 
  pass in their state as props into preview component
- add + delete buttons for each section
- reset onClick, call a function that will make the three components reset all values 
  by assigning to state to initial state variable
- example onclick, call a function that will set the state for three compoenents
*/
