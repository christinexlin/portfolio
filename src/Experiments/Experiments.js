import React from 'react';
import Thumbnail from '../Thumbnail.js';
import signofchange from './signofchange.gif';

function Experiments(props) {

  return (
<div className="experiments-page">
<h5 id="subtitle">PERSONAL PROJECTS TO LEARN + PLAY</h5>

        <div className="experiments">
        <Thumbnail
            link="https://www.youtube.com/watch?v=9tKcerYlEps"
            image={signofchange}
            title="Sign of Change"
            category={['ARDUINO', '3D PRINTING']}
            description="A handheld LED stick that can be programmed to display any scrolling message. Used by students during the Providence Climate Strike."
            icon=""
        />

        </div>


</div>
);
}

export default Experiments;
