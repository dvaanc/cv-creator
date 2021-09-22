import React, { Component } from 'react'
import locationIcon from '../icons/location.png';
import emailIcon from '../icons/email.png';
import phoneIcon from '../icons/phone.png';

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
      <div className="previewContainer">
        <div className="row1">
          <div className="avatar"></div>
          <div className="profile">
            <h2>PROFILE</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius at nulla sed pretium. Nunc semper interdum lorem, id efficitur est. Pellentesque semper sed augue sed euismod. Maecenas dapibus efficitur purus at tincidunt. Pellentesque consequat venenatis velit, eu commodo dolor mollis vel. Donec mollis iaculis dui.
            </p>
          </div>
        </div>
        <div className="row2">
          <div className="title">
            <p>Professional Title</p>
          </div>
          <div class="name">
            <p>John Smith</p>
          </div>
        </div>
        <div className="row3">
            <div className="col1">
              <div className="section1">
                <h2>CONTACT</h2>
                <ul>
                  <li>
                    <img src={ locationIcon } alt="location"/>
                  </li>
                  <li>
                    <img src={ emailIcon } alt="email"/>
                  </li>
                  <li>
                    <img src={ phoneIcon } alt="email"/>
                  </li>
                </ul>
              </div>
              <div className="section2"/>
              <div className="section3"/>
            </div>
            <div className="col2">
              <div className="education">
                <h2>EDUCATION</h2>
                <div className="educationBlock">
                  <ul className="educationList">
                    <li>
                      <div className="date">
                        2015 - Present
                      </div>
                      <div className="info">
                        <h4>Senior Web Developer</h4>
                        <p>Facebook inc, Menlo Park</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="workExperience">
                <h2>WORK EXPERIENCE</h2>
                <div className="workExperienceBlock">
                  <ul className="workExperienceList">
                    <li>
                      <div className="date">
                        2015 - Present
                      </div>
                      <div className="info">
                        <h4>Melbourne Universtity, Melbourne</h4>
                        <p>Degree: Master of Computer Science</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="references">
                <h2>REFERENCES</h2>
                <p>Avaliable on request.</p>
                
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default PreviewComponent;
