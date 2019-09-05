import React from 'react';
import './projects.css';

const Projects = () => (
  <>
    <section className="page-heading">
      <h2>Projects</h2>
    </section>
    <section className="card project-card">
      <div className= "card preview-card-img">
        <div className="overlay-content">
          <a href="https://piontekle-fitfeel.herokuapp.com" target="_blank">
            <div className="project-overlay"></div>
            <img className="preview-img" src="https://live.staticflickr.com/65535/48684120682_7651c9b363_b.jpg" alt="fitfeel-preview" />
            <div className="overlay-details"><h3>Go To App</h3></div>
          </a>
        </div>
      </div>
      <div className="card-heading project-heading">
        <h4>FitFeel:</h4>
      </div>
      <div className="project-card-content">
          <p><a className="link project-link" href="https://github.com/piontekle/fitfeel" target="_blank">Repo</a></p>
          <p><b>Quick Hits:</b> SPA to mentally check in before and after workouts</p>
          <p><b>Upcoming features:</b> teammates to applaud check ins, Cypress testing, prompts for checking in, CSS cleanup</p>
          <p><b>Tech:</b> React | Node | Express | PostgreSQL | Jasmine | MDL | Heroku</p>
      </div>
    </section>
    <section className="card project-card">
      <div className= "card preview-card-img">
        <div className="overlay-content">
          <a href="https://lists-and-friends.firebaseapp.com/" target="_blank">
            <div className="project-overlay"></div>
            <img className="preview-img" src="https://live.staticflickr.com/65535/48685444956_89aa787548_z.jpg" alt="lists-preview" />
            <div className="overlay-details"><h3>Go To App</h3></div>
          </a>
        </div>
      </div>
      <div className="card-heading project-heading">
        <h4>Lists & Friends:</h4>
      </div>
      <div className="project-card-content">
          <p><a className="link project-link" href="https://github.com/piontekle/lists-and-friends" target="_blank">Repo</a></p>
          <p><b>Quick Hits:</b> SPA to collaboratively make lists across browsers</p>
          <p><b>Upcoming features:</b> User options including change password, groups for individual login, private lists</p>
          <p><b>Tech:</b> React | Firebase | Cypress | Bootstrap</p>
      </div>
    </section>
    <section className="card project-card">
      <div className= "card preview-card-img">
        <div className="overlay-content">
          <a href="http://piontekle-bloccipedia.herokuapp.com/" target="_blank">
            <div className="project-overlay"></div>
            <img className="preview-img" src="https://live.staticflickr.com/65535/48685680322_3ce63e3180_z.jpg" alt="bloccipedia-preview" />
            <div className="overlay-details"><h3>Go To App</h3></div>
          </a>
        </div>
      </div>
      <div className="card-heading">
        <h4>Bloccipedia:</h4>
      </div>
      <div className="project-card-content">
          <p><a className="link project-link" href="https://github.com/piontekle/bloccipedia" target="_blank">Repo</a></p>
          <p><b>Quick Hits:</b> Wiki replica with CRUD functionality for user-made wikis. Paid account option with Stripe integration to make wikis private.</p>
          <p><b>Upcoming features:</b>Better UI, option to add images</p>
          <p><b>Tech:</b> Node | Express | PostgreSQL | Stripe | Jasmine | ESX | CSS | MDL | Heroku</p>
      </div>
    </section>
  </>
)

export default Projects;
