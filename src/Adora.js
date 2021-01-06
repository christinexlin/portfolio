import React from 'react';
import { NavLink } from 'react-router-dom';
import Text from './Text.js';
import Header from './Header.js';
import Image from './Image.js';
import landing from './adora.png';
import schoolprofile from './Adora/schoolprofile.png';
import solution1 from './Adora/solution-1.png';
import solution2 from './Adora/solution-2.png';
import solution3 from './Adora/solution-3.png';

function Adora(props) {
  return (
          <div className="project-page">
              <div className="navigation black links">
                <NavLink basename={process.env.PUBLIC_URL} exact to="/" className="link" activeClassName="selected">PROJECTS</NavLink>
              </div>

              <Header
              image={landing}
              title='Adora Experiences'
              tagline='Redefining the college visit for high school students during COVID-19'
              link='View Project'
              url='https://app.adoraexperiences.com/'
              role='Lead Designer'
              timeline='Sept 2020-Jan 2021'
              team="Raya Ward (Co-Founder and CPO), Cyrus Cowley (Engineer)"
              />

              <Text heading="Project Overview">
              <h6>ABOUT ADORA</h6>
              <p><a href="https://www.adoraexperiences.com/index.html" target="_blank"
              rel="noopener noreferrer"> Adora Experiences</a> is an early-stage startup redefining the college visit.
              We help universities engage prospective visitors through personalized,
              self-guided campus tours available on iOS, Android, and web.</p><br/>

              <h6>MY ROLE</h6>
              <p>I led the end-to-end design of Adora's campus
              tour web app, dealing with the full life-cycle of the app from idea to production.
              I conducted user + market research and worked on a cross-functional team,
              leading strategy discussions with input from multiple stakeholders.<br/><br/>

              I iterated on designs, conducted usability testing on a high-fidelity,
              interactive prototype, and worked closely with engineers during implementation.
              My final deliverable expanded Adora's product offerings, making the platform
              more accessible to students globally and making Adora more competitive in the
              virtual campus tour market. Although my work is protected under NDA, you can contact me at
              chin_hsuen_lin@brown.edu for details.
              </p>
              </Text>

              <Text heading="How can we create a campus visit for the web?">
              <p>As a result of COVID-19, high school students are no longer able to go on
              in-person campus tours. The pandemic has halted campus visit programs globally,
              posing a challenge for prospective students who depend on tours to make more informed
              college decisions. My goal was to design a virtual tour experience that
              felt authentic, captured the campus atmosphere, and provided human connection.
              </p>
              </Text>

              <Text heading="The solution">
              </Text>

              <Image type='single' color='#F0F2FD' width='1100px'
              padding='top' src={schoolprofile} alt="user personas"/>

              <Image type='single' color='#ffffff' width='900px'
              padding='top' src={solution1} alt="user personas"/>

              <Image type='double' color='#ffffff' width='800px'
              padding='none' src={solution2} alt="user personas">
              <h5>Imagine yourself on campus</h5><br/>
              <p>The stop page includes curated information about a universities' campus,
              history, traditions, and student life.
              The multimedia gallery and student testimonials help prospective students
              envision themselves living and studying on campus.
              </p>
              </Image>

              <Image type='double' color='#ffffff' width='800px'
              padding='none' src={solution3} alt="user personas">
              <h5>Browse multiple schools</h5><br/>
              <p>Prospective students can browse tours from 7 different
              universities in one convenient location.
              </p>
              </Image>

              <Text heading="Reflection">
              <p>Working as a designer an early-stage startup, I learned how to work with multiple stakeholders such as
              high school students, parents, and universities, lead conversations around business strategy,
              and explain my design decisions during regular critiques.
              <br/><br/>
              </p>
              </Text>
              </div>
  );
}

export default Adora;
