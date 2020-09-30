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
          <h4>Hi, I'm Christine!</h4>
          <br/>
          <h4>I’m a product designer and front-end developer studying CS at Brown University.</h4>
          <br/>
          <h4>I'm passionate about building learning communities—I created
          a 13-week product design curriculum and I'm currently helping 50+ students
          learn design @ <a target="_blank" rel="noopener noreferrer"
          href="https://www.notion.so/Product-Classroom-Fall-2020-8b5faeaa590444a996d5233e462c7e4f">
          Product Classroom</a>.</h4>
          <br/>
          <h4>I'm also currently designing the virtual campus tour experience @
          <a href="https://www.adoraexperiences.com/index.html" target="_blank"
          rel="noopener noreferrer"> Adora</a>.</h4>
          </div>
          <div className="second">
          <br/>
          <br/>
          <p>TALK TO ME!</p><p><Emoji text="✉️"/> chin_hsuen_lin@brown.edu</p>
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
