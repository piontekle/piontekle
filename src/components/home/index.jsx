import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

import indySelfie from '../../assets/indy_red_selfie.jpeg';

const Home = () => (
  <>
    <section className="card home-card">
      <h2 className="summary">Hi, I'm Lauren.</h2>
      <p className="summary-p">I'm a Boston-based Full Stack Developer with experience in Go, Node, Express, React/React Native, SQL (PostgreSQL), and MongoDB. I love that there's more than one way to do just about anything in development. See the sidebar for ways to get in touch. Let's chat about tech!</p>
    </section>
    <section className="preview-card-section">
      <div className="card preview-card" id="about-preview">
        <img className="preview-img" src={indySelfie} alt="about-preview-img"/>
        <p>More about my professional and personal experiences.</p>
        <Link className="link preview-link" to="/about">Learn More</Link>
      </div>
      <div className="card preview-card" id="projects-preview">
        <img className="preview-img" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="project-preview-img"/>
        <p>Highlighting my favorite projects.</p>
        <Link className="link preview-link" to="/projects">Learn More</Link>
      </div>
      <div className="card preview-card" id="skills-preview">
        <img className="preview-img" src="https://images.unsplash.com/photo-1508317469940-e3de49ba902e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="skills-preview-img"/>
        <p>Languages and technology that I am familiar with.</p>
        <Link className="link preview-link" to="/skills">Learn More</Link>
      </div>
    </section>
  </>
)

export default Home;
