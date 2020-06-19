import React from "react";
import { Twemoji } from 'react-emoji-render';
import christine from './christine.jpg';

function About(props) {
  return (
    <div className="about-page container">
    <div className="row">
    <div className="about-img col-lg">
    <img src={christine}/>
    </div>
    <div className="about-text col-lg">
    <div>
      <p>Hello!</p>
      <p>
      I'm a designer who loves to build products that solve problems and bring
      joy to others. I'm also a big fan of emojis. <Twemoji className="emoji" text="🤡"/>
      I'm always learning about design - at the moment, I'm learning how to create
      animations for the web. </p>
      <p>
      I'm currently based in Taipei, Taiwan but I have lived in Irvine, LA, and Australia.
      </p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default About;
