import React from 'react';
import critterpedia from './critterpedia.png';
import critterpedia1 from './critterpedia-1.png';
import critterpedia2 from './critterpedia-2.png';



function Critterpedia(props) {
  return (
        <div className="project-page">
        <div className="page-header">
            <h1>Blather's Critterpedia</h1>
            <h4>A search and filter site to help players discover bugs and fish in Animal Crossing
            New Horizons
            </h4>
            <p>Built with React and data from ACNH API</p>

            <a className="link" href="https://blatherscritterpedia.herokuapp.com/">VIEW SITE</a>
        </div>
        <div className="page-img">
        <img src={critterpedia}/>
        <img src={critterpedia2}/>
        </div>


        <div className="page-body">

        </div>
        </div>
  )
}

export default Critterpedia;
