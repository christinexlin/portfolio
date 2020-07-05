import React, {Component} from 'react';
import Thumbnail from './Thumbnail.js';
import { NavLink } from 'react-router-dom';

import critterpedia from './Projects/critterpedia.png';
import Emoji from 'react-emoji-render';
import tom from './Projects/tomnook.png';
import bluenotes from './Projects/bluenotes.png';
import fullpage from './Projects/Critterpedia/fullpage.png';
import visualize from './visualize-actualize.png';
import p5 from 'p5';
import Sketch from 'p5';


class Projects extends Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    sketch = (s) => {
        let x = 0;
        let y = 0;
        let emojis = ["🤖","💥","⚡","🇯🇵","🤓","🍞"];
        let captions = ["beep boop @ brown","designing for change", "building playful products",
        "learning japanese","constantly curious","big fan of bread"]
        let currIndex = 0;
        let max = emojis.length;
        let currEmoji = emojis[currIndex];
        let text;

      s.setup = () => {
        s.createCanvas(s.windowWidth, s.windowHeight);
        s.noStroke();
      }

      s.mousePressed = () => {
          currIndex += 1;
          if (currIndex >= emojis.length) {
              currIndex = 0;
          }
          currEmoji = emojis[currIndex];
      }

      s.draw = () => {
        s.clear();
        s.resizeCanvas(s.windowWidth, s.windowHeight);
        x = s.lerp(x, s.mouseX, 0.05);
        y = s.lerp(y, s.mouseY, 0.05);
        s.fill(255);
        s.noStroke();
        s.textSize(80);
        s.textAlign(s.CENTER);
        s.text(currEmoji, x, y);
        s.textSize(16);
        s.text(captions[currIndex], x, y+40);
      }
    }

    componentDidMount() {
    this.myP5 = new p5(this.sketch, this.myRef.current);
    }

  render() {
      return (
          <div>

          <div className="p5" ref={this.myRef}>
          </div>
          <div className="navigation white links">
            <NavLink basename={process.env.PUBLIC_URL} exact to="/" className="link" activeClassName="selected">PROJECTS</NavLink>
            <NavLink basename={process.env.PUBLIC_URL} to="/experiments" className="link" activeClassName="selected">EXPERIMENTS</NavLink>
            <NavLink basename={process.env.PUBLIC_URL} exact to="/about" className="link" activeClassName="selected">ABOUT</NavLink>
          </div>

            <div className="intro container-fluid">
                <div className="intro-sub row">

                <div className="intro-text col-md-auto">
                    <div>
                        <h1>Christine Lin</h1>
                        <h2>designer <span className="line"></span> developer</h2>
                    </div>
                </div>

                <div className="intro-icon col-md-auto">
                    <Emoji className="emoji" text="💭"/>
                    <div className="img-div">
                        <img className="rotate" src={visualize} alt="visualize-actualize"/>
                    </div>
                </div>

                </div>

                <div className="intro-bottom">
                    <svg><circle cx="4" cy="4" r="4" fill="white" /></svg>
                    <p>CLICK ANYWHERE TO GET TO KNOW ME</p>
                </div>
            </div>

            <div className="projects">
            <Thumbnail
                link="/critterpedia"
                image={critterpedia}
                image2={critterpedia}
                title="Blather's Critterpedia"
                category={['FRONT-END DEVELOPMENT', 'WEB DESIGN']}
                description="React search + filter site to help players discover bugs and fish in Animal Crossing"
                icon={tom}
            />
            <Thumbnail
                link="/bluenotes"
                image={bluenotes}
                image2={bluenotes}
                title="Bluenotes"
                category={['CASE STUDY', 'PRODUCT DESIGN']}
                description="Q&A forum to support new students at Brown as they adjust to campus life"
            />
            </div>


    </div>
);

  }
}

export default Projects;
