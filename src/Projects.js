import React, {Component} from 'react';
import Thumbnail from './Thumbnail.js';
import critterpedia from './Projects/critterpedia.png';
import { Twemoji } from 'react-emoji-render';
import tamagotchi2 from './tamagotchi2.png';
import tom from './Projects/tomnook.png';
import bluenotes from './Projects/bluenotes.png';
import fullpage from './Projects/Critterpedia/fullpage.png';
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
        let emojis = ["🤪","🕹️","🍵","🥴","💭","🇹🇼","🤓","🍳","🥟","🤤","🍣","🤖","🍞"];
        let currIndex = Math.floor(Math.random() * emojis.length);
        let max = emojis.length;
        let currEmoji = emojis[currIndex];

      s.setup = () => {
        s.createCanvas(s.windowWidth, s.windowHeight);
        s.noStroke();
      }

      s.mousePressed = () => {
          currIndex = currIndex + 1;
          if (currIndex >= emojis.length) {
              currIndex = 0;
          }
          currEmoji = emojis[currIndex];
      }

      s.draw = () => {
        s.background(255);
        x = s.lerp(x, s.mouseX, 0.05);
        y = s.lerp(y, s.mouseY, 0.05);
        s.fill(0);
        s.stroke(0);
        s.textSize(80);
        s.text(currEmoji, x, y);
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
            <div className="intro">

                <div className="intro-sub">
                    <h1>Christine Lin</h1>
                    <h2>Hello!
                    I'm a product designer and front-end developer based in Taipei.
                    I study Computer Science at Brown University.
                    </h2>
                    <h6>CLICK TO GET TO KNOW ME</h6>
                </div>
            </div>

            <div className="projects">
            <Thumbnail
                link="/critterpedia"
                image={critterpedia}
                title="Blather's Critterpedia"
                category={['FRONT-END DEVELOPMENT', 'WEB DESIGN']}
                description="React search + filter site to help players discover bugs and fish in Animal Crossing"
                icon={tom}
            />
            <Thumbnail
                link="/bluenotes"
                image={bluenotes}
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
