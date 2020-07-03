import React from 'react';
import screenshot from './Critterpedia/screenshot.png';
import screenshot2 from './Critterpedia/screenshot-2.png';
import filterui from './Critterpedia/filterui.png';
import moodboard from './Critterpedia/moodboard.png';
import butterfly from './Critterpedia/6.png';
import wasp from './Critterpedia/25.png';
import butterfly2 from './Critterpedia/4.png';
import fullpage from './Critterpedia/fullpage.png';
import illustrations from './Critterpedia/illustrations.png';

function Critterpedia(props) {
  return (
        <div className="project-page">

        <div className="page-header">

        <div className="page-header-text">
            <div>
            <img id="bug-3" alt="butterfly" src={butterfly2}/>
            <h1>Blather's Critterpedia</h1>
            <h4>A search and filter site to help players discover bugs and fish in Animal Crossing
            New Horizons
            </h4>
            <a className="link" href="https://blatherscritterpedia.herokuapp.com/">VIEW SITE</a>
            </div>
        </div>
        </div>

        <div className="page-description">
        <img src={fullpage}/>
        <img src={screenshot}/>
        <div className="text-div">
        <p>I built this website using React and data from the ACNH RESTful API. Players of the switch
        game Animal Crossing New Horizons can discover new critters, learn which fish or bugs
        are currently available to catch, and filter by categories such as rarity.
        Clicking on a critter brings up a pop-up modal that displays more detailed information
        such as location, price, and interesting facts.</p>
        </div>

        <img src={filterui}/>
        <div className="text-div">
        <h5>DESIGNING THE FILTER UI</h5>
        <p>For simple filters (only 2 options to choose from), I used toggle buttons instead of dropdown buttons
        to save space and provide visual feedback to users. For more complex filters, such as filtering by rarity, hemisphere, and month,
        I used a tab group so users could easily see which filters are active.</p>
        </div>

        <img src={moodboard}/>
        <img src={illustrations}/>
        <div className="text-div">
        <h5>TAKING INSPIRATION FROM FIELD GUIDES</h5>
        <p>For the visual design of the site, I was inspired by the design of field guides,
        encyclopedias, and vintage posters/scientific illustrations. I wanted the
        homepage of the site to function like an interactive poster.
        </p>
        </div>

        </div>


        <div className="page-body">

        </div>
        </div>
  )
}

export default Critterpedia;
