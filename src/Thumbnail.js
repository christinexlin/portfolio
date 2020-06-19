import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Thumbnail(props) {
  return (
    <div className="project-thumbnail">
      <Link to={props.link}>
        <div className="project-image">
          <img src={props.image} alt="critterpedia"/>
        </div>

        <div className="project-title">
        <h5>{props.title}</h5>
            <div className="project-category">
                <p>{props.category[0]}</p>
                <p>{props.category[1]}</p>
            </div>
        <h6>{props.description}
        {props.icon != "" ? <img id="icon" src={props.icon}/> : null}
        </h6>
        </div>
      </Link>
    </div>
  );
}

export default Thumbnail;
