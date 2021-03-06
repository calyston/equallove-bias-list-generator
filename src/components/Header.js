import React from 'react';

//Import Logo
import logo from '../assets/images/logo_heart.png';

const Header = () => {
  return (
    <header>
      <img id="logo" src={logo} alt="#" />
      <h2>Bias List Generator</h2>
      <p id="how-to">How to play: Each member of =LOVE will go head-to-head; select your favourite member each time to
        determine your
        bias list!</p>
    </header>
  )
}

export default Header;