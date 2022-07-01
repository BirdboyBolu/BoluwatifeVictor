import React from 'react';
import './Header.css';
import CTA from './CTA';
import ME from '../../Assets/me.png';
import Socials from './Socials';

const Header = () => {
  return (
    <header>
      <div className="container Header__container">
        <h5> Hello, I'm</h5>
        <h1> Boluwatife Victor O.</h1>
        <h5 className="text-light">Frontend Developer/Web3 Technical Writer</h5>
        <CTA />
        <Socials />

        <div className="me">
          <img src={ME} alt="me" />

          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
