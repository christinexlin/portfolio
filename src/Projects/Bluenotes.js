import React from 'react';
import { NavLink } from 'react-router-dom';

import a from './Bluenotes/1.png';
import b from './Bluenotes/2.png';
import c from './Bluenotes/3.png';
import e from './Bluenotes/5.png';
import f from './Bluenotes/6.png';
import g from './Bluenotes/7.png';
import h from './Bluenotes/8.png';
import i from './Bluenotes/9.png';
import j from './Bluenotes/10.png';
import k from './Bluenotes/11.png';
import l from './Bluenotes/12.png';
import m from './Bluenotes/13.png';
import n from './Bluenotes/14.png';
import o from './Bluenotes/15.png';
import p from './Bluenotes/16.png';
import q from './Bluenotes/17.png';
import r from './Bluenotes/18.png';
import s from './Bluenotes/19.png';
import t from './Bluenotes/20.png';
import u from './Bluenotes/21.png';



function Bluenotes(props) {
  return (
        <div className="project-page">
        <div className="navigation black links">
          <NavLink basename={process.env.PUBLIC_URL} exact to="/" className="link" activeClassName="selected">PROJECTS</NavLink>
          <NavLink basename={process.env.PUBLIC_URL} to="/experiments" className="link" activeClassName="selected">EXPERIMENTS</NavLink>
          <NavLink basename={process.env.PUBLIC_URL} exact to="/about" className="link" activeClassName="selected">ABOUT</NavLink>
        </div>
        <div className="page-header">
        <div className="page-header-text">
        <div>
            <h1>Bluenotes</h1>
            <h4>Q&A forum and mentorship platform to support new students at Brown University as they adjust to campus life
            </h4>
            </div>
</div>
        </div>
        <div className="page-description">
        <img src={t}/>

        <img src={b}/>
        <img src={a}/>
        <img src={c}/>
        <img src={e}/>
        <img src={f}/>
        <img src={g}/>
        <img src={h}/>
        <img src={i}/>
        <img src={j}/>
        <img src={k}/>
        <img src={l}/>
        <img src={m}/>
        <img src={n}/>
        <img src={o}/>
        <img src={p}/>
        <img src={q}/>
        <img src={r}/>
        <img src={s}/>
        <img src={t}/>
        <img src={u}/>
        </div>


        <div className="page-body">

        </div>
        </div>
  )
}

export default Bluenotes;
