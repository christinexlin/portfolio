import React, { Component } from 'react';
import Thumbnail from './Thumbnail.js';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { isMobile } from 'react-device-detect';
import p5 from 'p5';
import { AnimatePresence } from 'framer-motion';
import FadeIn from './FadeIn.js';

import bluenotes from './Bluenotes/bluenotes.png';
import formally from './Formally/formally-thumbnail.png';
import formally2 from './Formally/formally-thumbnail-2.png';
import raisesocial from './RaiseSocial/landing.png';
import raisesocial2 from './RaiseSocial/landing2.png';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.headerTag = React.createRef();
        this.thumbnail = React.createRef();
    }

    sketch = (s) => {
        let x = 0;
        let y = 0;
        let emojis = ["🤖","💥","⚡","🇯🇵","🤓","🍞"];
        let captions = ["beep boop @ brown university","designing for change", "building playful products",
        "learning japanese","constantly curious","big fan of bread"]
        let currIndex = 0;
        let currEmoji = emojis[currIndex];

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
        if (!isMobile) {
            this.myP5 = new p5(this.sketch, this.myRef.current);
        }
    }

  render() {
      const transition = {
          delay: 0.5,
          duration: 0.7,
          ease: [0.47,0,0.75,0.72],
      }
      const textTransition1 = {
          delay: 1.5,
          duration: 0.9,
          ease: [0.46,0.03,0.52,0.96],
      }
      const textTransition2 = {
          delay: 2.5,
          duration: 0.9,
          ease: [0.46,0.03,0.52,0.96],
      }
      const pageVariant = {
          initial: {
              opacity: 0,
          },
          animate: {
              opacity: 1,
          },
          exit: {
              opacity: 0,
          },
          startText: {
              opacity: 0,
              y: 60,
          },
          animateText: {
              opacity: 1,
              y: 0,
          }
      };

      return (
          <AnimatePresence exitBeforeEnter>
          <motion.div variants={pageVariant} initial='initial' animate='animate'
          exit='exit' transition={transition}>

          {isMobile ? null : <div className="p5" ref={this.myRef}> </div>}

          <div className="navigation white links">
            <NavLink basename={process.env.PUBLIC_URL} exact to="/" className="link" activeClassName="selected">PROJECTS</NavLink>
            <NavLink basename={process.env.PUBLIC_URL} exact to="/about" className="link" activeClassName="selected">ABOUT</NavLink>
          </div>

          <div className="section landing">
            <div>
                {isMobile ? null :
                <motion.div
                variants={pageVariant} initial='startText' animate='animateText'
                transition={textTransition2} className="landing-click">
                <i class="material-icons-outlined">mouse</i>
                    <p>CLICK ANYWHERE TO GET TO KNOW ME</p>
                </motion.div>}
                    <motion.div
                    variants={pageVariant} initial='startText' animate='animateText'
                    transition={textTransition1} className="landing-text">
                    <h1>Christine Lin</h1>
                    <h2>designer who codes</h2>
                    </motion.div>
                </div>
            </div>

            <div className="section projects">
            <div className="centered">
            <FadeIn>
            <div className="projects-text">
                <h2>Hi! I'm a product designer and front-end developer inspired
                by playful and impactful experiences.</h2>
                <br/>
                <h5>I design to solve problems, encourage change, and spark joy.
                As a Computer Science student, I use my technical background to
                inform my design decisions and bridge the gap between design and engineering.</h5>
            </div>
            </FadeIn>
            <div className="projects-thumbnails">
            <FadeIn>
            <Thumbnail
                link="/formally"
                image={formally}
                image2={formally2}
                title="Formally"
                category={['PRODUCT DESIGN']}
                size="large"
                description="Simplifying the asylum application process"
            />
            </FadeIn>

            <FadeIn>
            <Thumbnail
                link="/raisesocial"
                image={raisesocial2}
                image2={raisesocial}
                title="Raise Social"
                category={['PRODUCT DESIGN']}
                size="large"
                description="Building a socially-conscious social media platform"
            />
            </FadeIn>

            <FadeIn>
            <Thumbnail
                link="/bluenotes"
                image={bluenotes}
                image2={bluenotes}
                title="Bluenotes"
                category={['CASE STUDY', 'PRODUCT DESIGN']}
                size="large"
                description="Supporting new students at Brown as they adjust to campus life"
            />
            </FadeIn>
            </div>

            </div>
            </div>

    </motion.div>
    </AnimatePresence>

);

  }
}

export default Projects;
