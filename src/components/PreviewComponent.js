import React, { Component } from 'react'
import locationIcon from '../icons/location.png';
import emailIcon from '../icons/email.png';
import phoneIcon from '../icons/phone.png';
import emptyAvatar from '../icons/emptyAvatar.png';
import { v4 as uuidv4 } from 'uuid';

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
  handleDate = (date) => {
    // const today = new Date();
  }
  setDefaultPhoto = () => {
    if(this.state.generalData.photoSrc === 
      '' || 
      undefined || 
      null
      ) {
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
                    {
                      educationData.map((item, i) => {
                        const uuid = uuidv4();
                        return (
                          <li key={uuid}>
                            <div className="date">
                              {item.startDate} - {item.endDate}
                            </div>
                            <div className="info">
                              <h4>{item.institution}, {item.city}</h4>
                              <p>Qualification: {item.qualification}</p>
                            </div>
                          </li>
                        );
                      })
                    }
                  </ul>
                </div>
              </div>
              <div className="workExperience">
                <h2>WORK EXPERIENCE</h2>
                <div className="workExperienceBlock">
                  <ul className="workExperienceList">
                  {
                      workData.map((item, i) => {
                        const uuid = uuidv4();
                        return (
                          <li key={uuid}>
                            <div className="date">
                              {item.startDate} - {item.endDate}
                            </div>
                            <div className="info">
                              <h4>{item.company}, {item.city}</h4>
                              <p>Job Title: {item.position}</p>
                            </div>
                          </li>
                        );
                      })
                    }
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
