import React from 'react';
import '../App.css';
const Markup = (() => {
  const header = () => {
    return (
    <header>
      <h1>CV CREATOR</h1>
    </header>
    )
  }
  
  const form = () => {
    return (
  <div>
    <form onSubmit={this.onSubmitCV}>
      <fieldset>
        <label>
          <p>First name</p>
          <input 
          type="text"
          id="fName"
          placeholder="John Doe"
          value=""
          />
        </label>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  </div>
    )
  }
  
  const footer = () => {
    return (
      <footer>
        <p>Copyright © 2021. Web Design by Danny Cao.</p>
      </footer>
    )
  }
  
  const content = () => {
    return (
      header(),
      form(),
      footer(),
    )
  }
  return content;
})();

export default Markup;
