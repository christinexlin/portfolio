import React from 'react';
import { NavLink } from 'react-router-dom';
import Text from './Text.js';
import DisplayText from './DisplayText.js';
import Header from './Header.js';
import Image from './Image.js';
import landing from './RaiseSocial/landing.png';
import profile from './RaiseSocial/profilepage.png';
import interaction from './RaiseSocial/interactions.png';
import interactionpage from './RaiseSocial/interactionpage.png';
import tweet from './RaiseSocial/tweet.png';
import profilemockup from './RaiseSocial/profilepagemockup.png';
import lowfidelity from './RaiseSocial/lowfidelity.png';
import branding from './RaiseSocial/branding.png';
import booking from './RaiseSocial/booking.png';

function RaiseSocial(props) {
  return (
          <div className="project-page">
              <div className="navigation white links">
                <NavLink basename={process.env.PUBLIC_URL} exact to="/" className="link" activeClassName="selected">PROJECTS</NavLink>
                <NavLink basename={process.env.PUBLIC_URL} exact to="/about" className="link" activeClassName="selected">ABOUT</NavLink>
              </div>

              <Header
              image={landing}
              title='Raise Social'
              tagline='Building a socially-conscious social media platform'
              url=''
              role='Product Designer'
              team="Cara Vo, Eashan Mathur, Mia O'Brien, Dennis Bae, Sai Harika"
              timeline='9 weeks'
              />

              <div className="project-page-text">
              <h6>Note: This project is currently in progress</h6>
              </div>

              <DisplayText background='dark' color='#1E1E1E' height='70vh'
              heading="">

              <h3>Every day, we see friends advocate for social movements on social media.
              We see mentors offer resume and portfolio reviews in exchange for non-profit donations.
              </h3>

              <div className='screenshot'>
                <img src={tweet} alt='tweet'/>
              </div>

              <h3>In 2020, now is the time to fill the whitespace of impact-driven interaction that's
              been ignored by Big Tech.</h3><br/>
              </DisplayText>

              <div className='full-image'>
              <img src={profilemockup} alt='tweet'/>
              </div>

              <DisplayText color='white' height='10vh'
              heading="">
              <h2>Raise.social is a fundraising platform that lets fundraisers charge for
              interactions (e.g. coffee chats, resume reviews, mock interviews) in return for donations to a cause.
              </h2><br/>
              </DisplayText>

              <Text background='dark' color='#1E1E1E' height='tall'
              heading='Defining the problem'>
              <h6>THE PROBLEM</h6>
              <h4>We believe that young people want to support causes they care about, but most
              are limited in their power to give what non-profits need the most: money. </h4><br/><br/>

              <h6>OUR MISSION</h6>
              <h4>We want to energize the non-profit and philanthropy sector by building
              the most socially-conscious social media platform of the 21st century.</h4><br/><br/>

              <h6>OUR VALUE PROPOSITION</h6>
              <h4>Raise.social lets anyone generate sustained donations for their cause
              and build their socio-political brand.</h4>
              </Text>

              <Text color='white' height='tall'
              heading='Talking to users'>
              <h4>Through surveys and interviews, we talked to college students and new graduates
              about their experiences with donating. Most people donated infrequently, typically
              once a month or a few times a year. </h4><br/>
              <h4>Almost everyone expressed
              a desire to donate more consistently, but said they lacked the financial means to do so.</h4>
              </Text>

              <Image type='iterations' color='#BFBFBF' title='Low-Fidelity Wireframes'
              padding='top'
              src={lowfidelity} alt="low-fidelity wireframes"/>

              <Image type='iterations' color='#BFBFBF' title='Interaction Card Iterations'
              padding='bottom'
              src={interaction} alt="interaction iterations"/>

              <Image type='iterations'
              title='Typography and Visual Identity'
              src={branding} alt="typography and logo"/>

              <Image type='double' src={profile} padding='top'
              title='View a fundraiser profile'>
              <p>Primary User Tasks</p>
              <ul>
                <li>View fundraiser's bio</li>
                <li>View interactions offered</li>
              </ul>
              <p>Secondary User Tasks</p>
              <ul>
              <li>Find out more information about the cause</li>
              <li>Share fundraiser profile</li>
              </ul>
              </Image>

              <Image type='double' src={interactionpage}
              title='View an interaction'>
              <p>Primary User Tasks</p>
              <ul>
                <li>Book an interaction</li>
                <li>View interaction details</li>
              </ul>
              </Image>

              <Image type='double' src={booking} padding='bottom'
              title='Book an interaction'>
              <p>Clicking on book leads to a Calendly pop-up that allows the
              user to schedule the interaction.</p><br/>
              <p>We chose to use
              Calendly here as it makes booking fast and easy.</p>
              </Image>

              <div className="project-page-text">
              <a className='prototype-link' target='_blank' rel='noopener noreferrer'
              href='https://www.figma.com/proto/Mf69tvtjDrHdt7qa0d0FiL/raise.social?node-id=421%3A2263&viewport=44%2C112%2C0.4913131296634674&scaling=scale-down-width'>
              VIEW FIGMA PROTOTYPE</a>
              <br/><br/><br/>
              </div>
        </div>
  );
}

export default RaiseSocial;
