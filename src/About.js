import React from "react";
import Emoji from 'react-emoji-render';
import { NavLink } from 'react-router-dom';
import diagram from './Images/venndiagram.png';

function About(props) {
  return (
      <div>
      <div className="navigation black links">
        <NavLink basename={process.env.PUBLIC_URL} exact to="/" className="link" activeClassName="selected">PROJECTS</NavLink>
        <NavLink basename={process.env.PUBLIC_URL} exact to="/about" className="link" activeClassName="selected">ABOUT</NavLink>
      </div>
    <div className="about-page container-fluid">
    <div className="page-width">
    <div className="row">
    <div className="about-img col-md">
    <img src={diagram} alt="venn diagram"/>
    </div>
    <div className="about-text col-md">
        <div>
            <div className="first">
          <h3>Hi, I'm Christine!</h3>
          <br/>
          <h3>I’m a product designer and front-end developer studying Computer Science at Brown University.
          I work at the intersection of design<Emoji text="💥"/> and code<Emoji text="⚡️"/>.</h3>
          <br/>
          <h3>I’m passionate about solving problems and building products that spark joy.</h3>
          <br/>
          </div>
          <div className="second">
          <br/>
          <p>CURRENTLY<span className="space"></span></p><p>UI/UX Intern @ Formally</p>
          <br/>
          <p>OPEN TO COLLABORATIONS</p><p><Emoji text="✉️"/> chin_hsuen_lin@brown.edu</p>
          </div>
         </div>
      </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default About;
