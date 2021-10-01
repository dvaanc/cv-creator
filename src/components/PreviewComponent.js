import React, { Component } from 'react'
import locationIcon from '../icons/location.png';
import emailIcon from '../icons/email.png';
import phoneIcon from '../icons/phone.png';
import emptyAvatar from '../icons/emptyAvatar.png';

class PreviewComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generalData: {
        photoSrc: emptyAvatar,
      },
      educationData: [],
      workData: [],
    };
  }
  loadData = () => {
    this.setState({
      generalData: this.props.data.generalData,
      educationData: this.props.data.educationData,
      workData: this.props.data.workData,
    });
  }
  setDefaultPhoto = () => {
    if(this.state.generalData.photoSrc === '' || undefined || null) {
      this.setState({
        ...this.state,
        generalData: {
          ...this.state.generalData,
          photoSrc: emptyAvatar,
        },
      });
    };
  }
  render() {
    const { generalData, educationData, workData } = this.state;

    // console.log(educationData[0])
    // console.log(workData)
    return (
      <div className="previewContainer">
        <div className="row1">
          <div className="avatar">
            <div className="avatarContainer">
              <img src={ generalData.photoSrc } alt="avatar"/>
            </div>
          </div>
          <div className="profile">
            <h2>PROFILE</h2>
            <p>{ generalData.description }</p>
          </div>
        </div>
        <div className="row2">
          <div className="title">
            <p>{ generalData.occupation }</p>
          </div>
          <div className="name">
            <p>{ generalData.firstName } { generalData.lastName }</p>
          </div>
        </div>
        <div className="row3">
            <div className="col1">
              <div className="section1">
                <h2>CONTACT</h2>
                <ul>
                  <li>
                    <img src={ locationIcon } alt="location"/>
                    <h4>{ generalData.city }</h4>
                  </li>
                  <li>
                    <img src={ emailIcon } alt="email"/>
                    <h4>{ generalData.email }</h4>
                  </li>
                  <li>
                    <img src={ phoneIcon } alt="email"/>
                    <h4>{ generalData.phone }</h4>
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
