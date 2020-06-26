import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Thumbnail from './Thumbnail.js';
import critterpedia from './Projects/critterpedia.png';
import { Twemoji } from 'react-emoji-render';
import tamagotchi2 from './tamagotchi2.png';
import tom from './Projects/tomnook.png';
import bluenotes from './Projects/bluenotes.png';


function Projects(props) {

  return (
<div>

        <div className="intro">
            <div className="intro-sub">
                <h1>Christine Lin</h1>
                <h2>Hello!
                I'm a product designer and developer based in Taipei.
                I currently study Computer Science at Brown University.
                <img className="tamagotchi" src={tamagotchi2}/>
                </h2>

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
  )
}

export default Projects;
