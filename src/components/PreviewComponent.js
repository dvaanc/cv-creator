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
      <div className="previewContainer">
        <div className="row1">
          <div className="avatar"></div>
          <div className="profile">
            <h2>Description</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius at nulla sed pretium. Nunc semper interdum lorem, id efficitur est. Pellentesque semper sed augue sed euismod. Maecenas dapibus efficitur purus at tincidunt. Pellentesque consequat venenatis velit, eu commodo dolor mollis vel. Donec mollis iaculis dui.
            </p>
          </div>
        </div>
        <div className="row2">
          <div className="title">
            <h2>Title</h2>
          </div>
          <div class="name">John Smith</div>
        </div>
        <div className="row3">
          <div className="columnContainer">
            <div className="col1">
              <div className="section">

              </div>
              <div className="section">

              </div>
              <div className="section">

              </div>
            </div>
            <div className="col2">

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PreviewComponent;
