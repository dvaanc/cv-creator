import React, { useState, useRef, useContext } from 'react';
import './styles/App.css'
import GeneralInfo from './components/GeneralComponent.js';
import EducationInfo from './components/EducationComponent.js';
import ExperienceInfo from './components/ExperienceComponent';
import PreviewComponent from './components/PreviewComponent';
import emptyCV from './components/utility/emptyCV';
import exampleCV from './components/utility/exampleCV';
export default function App(props) {
  // static workData = ExperienceInfo.workDataContext
    const [state, setState] = useState({});
    let generalData = {};
    let educationData = [];
    let workData = [];
    const general = useRef();
    const education = useRef();
    const work = useRef();
    const preview = useRef();
  
  function onClearCV(e) {
    e.preventDefault();
    general.current.clearState();
    education.current.clearList();
    work.current.clearList();
  }
  function onExampleCV(e) {
    e.preventDefault();
    general.current.prefill();
    education.current.generatePrefill();
    work.current.generatePrefill();
  }
  function onSubmitCV() {
    general.current.passDataToProps();
    education.current.passDataToProps();
    work.current.passDataToProps();
    Promise.resolve()
    .then(() => {
      setState({ 
        generalData: generalData,
        educationData: educationData,
        workData: workData,
      })
    })
    .then(() => {
      preview.current.loadData();
      preview.current.setDefaultPhoto();
    })
  }
  function handleGeneral(props) {
    return generalData = props;
  }
  function handleEducation(props){
    return educationData = props; 
  }
  function handleWork(props) {
    return workData = props; 
  }
    return (
      <div className="app">
        <header>
          <h1>CV CREATOR</h1>
        </header>
        <div className="container">
          <div className="formContainer">
            <form>
              <GeneralInfo
                ref={general}
                emptyCV={emptyCV.general}
                exampleCV={exampleCV.general}
                generalData={handleGeneral}
              />
              <EducationInfo 
                ref={education}
                emptyCV={emptyCV.education}
                exampleCV={exampleCV.education}
                educationData={handleEducation}
              />
              <ExperienceInfo 
                ref={work}
                emptyCV={emptyCV.work}
                exampleCV={exampleCV.work}
                workData={handleWork}
              />
              <div className="buttonCluster">
                <button className="button" id="reset" onClick={onClearCV}>Clear CV</button>
                <button className="button" id="example" onClick={onExampleCV}>Example CV</button>
                <button 
                type="submit" 
                className="button" 
                id="submit"
                onClick={(e) => {
                  e.preventDefault();
                  onSubmitCV()
                  }}>
                Generate CV
                </button>
              </div>

            </form>
          </div>
          <PreviewComponent ref={preview} data={state}/>
        </div>
        <footer>
          <p>Copyright © 2021. Web Design by Danny Cao.</p>
        </footer>
      </div>
    )
  }

/* 
- submit Onclick, call a function that will make the three components call their method to 
  pass in their state as props into preview component
- add + delete buttons for each section
- reset onClick, call a function that will make the three components reset all values 
  by assigning to state to initial state variable
- example onclick, call a function that will set the state for three compoenents
*/
