import React from 'react';
import '../styles/App.css'
import '../App.js';
const Markup = (() => {
  const header = (
    <header>
    <h1>CV CREATOR</h1>
  </header>
  )
  
  const footer = (
      <footer>
        <p>Copyright © 2021. Web Design by Danny Cao.</p>
      </footer>
  )

  
  return { header, footer };
})();

export default Markup;
