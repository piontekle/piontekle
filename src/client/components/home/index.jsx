import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => (
  <>
    <section className="card home-card">
      <h2 className="summary">Hi, I'm Lauren.</h2>
      <p className="summary-p">I'm a Brooklyn-based Full Stack Developer with experience in Node, Express, React, Angular, jQuery, SQL (including PostgreSQL), and MongoDB. I love that there's more than one way to do just about anything in development. I'm currently working as a Software Engineer at <a className="link" href="http://www.predictabill.com">predictaBill</a> in Manhattan where we help expecting parents predict insurance costs of having a child. See the sidebar for ways to get in touch. Let's chat about tech!</p>
    </section>
    <section className="preview-card-section">
      <div className="card preview-card" id="about-preview">
        <img className="preview-img" src="https://live.staticflickr.com/65535/48688731561_b05c264a21_m.jpg" alt="about-preview-img"/>
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
