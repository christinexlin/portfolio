import React, {Component} from 'react';
import { HashRouter, BrowserRouter, Route, NavLink, useLocation } from 'react-router-dom';
import './App.css';
import Projects from './Projects.js';
import About from './About.js';
import Critterpedia from './Projects/Critterpedia.js';
import Bluenotes from './Projects/Bluenotes.js';
import Experiments from './Experiments/Experiments.js';
import ScrollToTop from './ScrollToTop.js';
import Emoji from 'react-emoji-render';

class App extends Component {

    render() {
        return (
          <BrowserRouter basename="/">
          <ScrollToTop />
          <Route exact basename={process.env.PUBLIC_URL} path="/" component={Projects} />
          <Route basename={process.env.PUBLIC_URL} path="/experiments" component={Experiments} />
          <Route basename={process.env.PUBLIC_URL} path="/about" component={About} />
          <Route basename={process.env.PUBLIC_URL} path="/critterpedia" component={Critterpedia} />
          <Route basename={process.env.PUBLIC_URL} path="/bluenotes" component={Bluenotes} />



          <div className="footer container-fluid">
            <div className="row">
              <div className="col-md">
                  <div className="links">
                  <NavLink basename={process.env.PUBLIC_URL} exact to="/" activeClassName="selected">PROJECTS</NavLink>
                  <NavLink basename={process.env.PUBLIC_URL} to="/experiments" activeClassName="selected">EXPERIMENTS</NavLink>
                  <NavLink basename={process.env.PUBLIC_URL} exact to="/about" activeClassName="selected">ABOUT</NavLink>
                  </div>
              </div>
              <div className="col-md">
              <div className="links">
                  <a href="https://github.com/christinexlin">GITHUB</a>
                  <a href="https://www.linkedin.com/in/christine-lin-01/">LINKEDIN</a>
                  <a href="https://twitter.com/christinexlin">TWITTER</a>
              </div>
              </div>
            </div>
            <div className="row">
                <p className="credit">Made with <Emoji text="🖤"/>by Christine Lin</p>
            </div>
          </div>
          </BrowserRouter>
        );

    }
}

export default App;
