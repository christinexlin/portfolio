import React from 'react';
import { NavLink } from 'react-router-dom';
import Text from './Text.js';
import Header from './Header.js';
import landing from './adora.png';
import resource from './Formally/resource-full.png';
import iterations from './Formally/iterations.png';
import faq from './Formally/faq-recording.gif';

function Formally(props) {
  return (
          <div className="project-page">
              <div className="navigation black links">
                <NavLink basename={process.env.PUBLIC_URL} exact to="/" className="link" activeClassName="selected">PROJECTS</NavLink>
              </div>

              <Header
              image={landing}
              title='Virtual Campus Tour Web App'
              tagline='Designing a virtual campus tour web app to help students during COVID-19'
              link='VIEW SITE (Launching Jan 2021)'
              url=''
              role='Lead Designer'
              timeline='Sept 2020-Current'
              />

              <Text heading="Project Overview">
              <p>I lead the end-to-end design of personalized, digital campus
              tour web app for <a href="https://www.adoraexperiences.com/index.html" target="_blank"
              rel="noopener noreferrer"> Adora Experiences</a> based on user and market research .
              I iterated on designs, conducted usability testing on a high-fidelity prototype,
              and worked closely with engineers during implementation, taking the app from
              idea to production.
              <br/><br/>
              Although my work is protected under NDA, you can email me at
              chin_hsuen_lin@brown.edu for the full case study.
              </p>
              </Text>

              <Text heading="How can we create a campus visit for the web?">
              <p>As a result of COVID-19, high school students are no longer able to go on
              in-person campus tours. We solved this problem at Adora by launching a web app
              where students can take virtual campus tours of our partner universities.
              My challenge was to design a virtual tour experience that
              felt authentic, captured the campus atmosphere, and provided human connection.
              </p>
              </Text>

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

export default Formally;
