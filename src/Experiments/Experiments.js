import React, {Component} from 'react';
import Thumbnail from '../Thumbnail.js';
import signofchange from './signofchange.gif';
import { NavLink } from 'react-router-dom';

function Experiments(props) {

  return (
<div className="experiments-page">
<div className="navigation white links">
  <NavLink basename={process.env.PUBLIC_URL} exact to="/" className="link" activeClassName="selected">PROJECTS</NavLink>
  <NavLink basename={process.env.PUBLIC_URL} to="/experiments" className="link" activeClassName="selected">EXPERIMENTS</NavLink>
  <NavLink basename={process.env.PUBLIC_URL} exact to="/about" className="link" activeClassName="selected">ABOUT</NavLink>
</div>
<h5 id="subtitle">PERSONAL PROJECTS TO LEARN + PLAY</h5>

        <div className="experiments">
        <Thumbnail
            image={signofchange}
            image2={signofchange}
            title="Sign of Change"
            category={['ARDUINO', '3D PRINTING']}
            description="A handheld LED stick that can be programmed to display any scrolling message. Used by students during the Providence Climate Strike."
            icon=""
            external={true}
        />

        </div>


</div>
);
}

export default Experiments;
