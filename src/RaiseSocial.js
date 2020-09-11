import React from 'react';
import { NavLink } from 'react-router-dom';
import Text from './Text.js';
import DisplayText from './DisplayText.js';
import Header from './Header.js';
import Image from './Image.js';
import landing from './RaiseSocial/landing.png';
import profile from './RaiseSocial/profilepage.png';
import interactionpage from './RaiseSocial/interactionpage.png';
import tweet from './RaiseSocial/tweet.png';
import profilemockup from './RaiseSocial/profilepagemockup.png';
import lowfidelity from './RaiseSocial/lowfidelity.png';
import lowfidelityprofile from './RaiseSocial/lowfidelityprofile.png';
import branding from './RaiseSocial/branding.png';
import booking from './RaiseSocial/booking.png';
import user from './RaiseSocial/userpersona.png';
import userstory from './RaiseSocial/userstory.png';
import iteration2 from './RaiseSocial/iteration2.png';
import iteration3 from './RaiseSocial/iteration3.png';
import final from './RaiseSocial/finaldecision.png';
import modal from './RaiseSocial/modaliteration.png';

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
              team="Cara Vo, Eashan Mathur, Mia O'Brien, Dennis Bae, Sai Harika, Joshua Kaplan"
              timeline='July-Sept 2020 (9 weeks)'
              />

              <div className='full-image'>
              <img src={profilemockup} alt='mockup'/>
              </div>

              <DisplayText color='white' height='10vh'
              heading="">
              <h2>Raise.social is a fundraising platform that lets you offer mentorship services
              (e.g. resume reviews, coffee chats) in return for donations to a charity.
              </h2><br/>
              </DisplayText>

              <div className='video'>
              <iframe title='Raise Social demo' width="100%" height="500" src="https://www.youtube.com/embed/hWSHdJRA8Xg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
              </iframe>
              </div>

              <Text background='dark' color='#1E1E1E' height='tall'
              heading='Understanding the problem'>
              <h5>Young people want to support causes they care about, but most
              are limited in their power to give what non-profits need the most: money. </h5><br/><br/>

              <h5>Every day, we see friends advocate for social movements on social media.
              We see mentors offer resume and portfolio reviews in exchange for non-profit donations.
              </h5>

              <div className='screenshot'>
                <img src={tweet} alt='tweet'/>
              </div>

              <h5>80% of Gen Z say they use social media to talk about issues they care about.
              In 2020, now is the time to fill the whitespace of impact-driven interaction that's been ignored by Big Tech.</h5>
              </Text>

              <Text color='white' height='tall'
              heading='Talking to users'>
              <h5>We talked to college students and new graduates (25+ survey responses, 5 interviews)
              about their experiences with donating. Most people donated infrequently, typically
              once a month or a few times a year. Almost everyone expressed
              a desire to donate more consistently.</h5><br/>

              <h6>WHY DON'T PEOPLE DONATE AS OFTEN AS THEY WOULD LIKE?</h6>
              <ul>
                <li>Aren't financially able to give money regularly</li>
                <li>Feel like their donation is too small to make an impact</li>
                <li>Don’t know how the organization will use the donation</li>
              </ul>

              <h5 className='quote'>“A lot of volunteer opportunities I would have pursued would have been in person.
              I’m also waiting to reach more financial stability in order to donate more regularly to multiple causes.”</h5>
              </Text>

              <Image type='single' color='#f5f5f5' title='Creating user stories' width='800px'
              padding='top'
              src={user} alt="user personas"/>

              <Image type='single' color='#f5f5f5' title='' width='800px'
              padding='bottom' caption='Prioritizing features'
              src={userstory} alt="user stories"/>

              <Image type='iterations' color='#ECECEC' title='Low-Fidelity Wireframes'
              padding='top'
              src={lowfidelity} alt="low-fidelity wireframes"/>

              <Image type='iterations' color='#ECECEC' title=''
              padding='bottom'  caption='Low-fidelity wireframe of profile page'
              src={lowfidelityprofile} alt="interaction iterations"/>

              <Image type='double' color='#ECECEC'
              title='First Iteration' padding='top'
              src={iteration2} alt="iteration1">
              <p className='blue'>“Can’t tell this is a fundraiser”</p>
              </Image>

              <Image type='double' color='#ECECEC'
              title='Second Iteration' padding='bottom'
              src={iteration3} alt="iteration2">
              <p className='blue'>“No clear connection between fundraiser and services”</p>
              </Image>

              <Image type='iterations' color='#ECECEC'
              title='Final design decisions' padding='top'
              src={final} alt="final iteration">
              </Image>

              <Image type='iterations' color='#ECECEC'
              title='Switch from modal to full page' padding='bottom'
              src={modal} alt="final iteration">
              </Image>


              <Image type='iterations'
              title='Typography and Visual Identity'
              src={branding} alt="typography and logo"/>

              <Image type='double' src={profile} padding='top' mockup='simple-mockup'
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

              <Image type='double' src={interactionpage} mockup='simple-mockup'
              title='View an interaction'>
              <p>Primary User Tasks</p>
              <ul>
                <li>Book an interaction</li>
                <li>View interaction details</li>
              </ul>
              </Image>

              <Image type='double' src={booking} padding='bottom' mockup='simple-mockup'
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
