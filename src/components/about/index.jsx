import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import hallowcats from '../../assets/hallowcats.jpeg';
import './about.css';

class About extends Component {
  state = { showAbout: null };

  showClick(about) {
    this.setState({ showAbout: about });
  }

  render() {
    const { showAbout } = this.state;

    return (
      <>
        <section className="page-heading">
          <h2>About Me</h2>
        </section>
        <section className="card about-card">
          <img className="about-pic" src={hallowcats} alt="cats_in_costumes_with_us_in_organge" />
          <p>
            I'm a full stack developer based in Boston, MA. I was born and raised in St. Louis, MO where I enjoyed the no. 1 free zoo in the country and played under the Gateway Arch. Thanks to 6 years of Zoo and Science Center camps mixed with a DIY-oriented family, I grew up curious and always looking to experiment with something. From there I attend University of Missouri - Columbia (aka: Mizzou), where I started as a Communications and Political Science dual major. Long story short, I graduated in spring 2015 with my BS in Mechanical Engineering and a minor in Spanish.

            Since then I've moved around until finally landing in Boston, where I live with my fiancé and two cats, Hobbes and Opus.
          </p>
          <button
            className="about-button"
            onClick={() => this.showClick('professional')}
          >
            About Professional Experience
          </button>
          <button
            className="about-button"
            onClick={() => this.showClick('bootcamp')}
          >
            About Coding
          </button>
          <button
            className="about-button"
            onClick={() => this.showClick('personal')}
          >
            About Personal Life
          </button>
        </section>
        <section className={showAbout ? "card about-card" : "hidden"}>
          <section className={showAbout === "professional" ? "" : "hidden"} id="about-professional">
            <p>Out of college, I was hired for the position of Safety Engineer with Rockwell Automation and went through their Engineering in Training (EIT) program to learn all about supporting and developing Rockwell software. This is where I first realized how much I enjoyed software and started doing CodeAcademy Ruby classes and exercism challenges in my free time. Once out of EIT, I was exposed to the full design process for safety software - from assessment to implementation and validation. A year into my time with the safety group, business slowed, and I transferred to the position of Software Field Support Engineer. There I got to focus more on development and implementation but still primarily in Rockwell proprietary languages. When my contract with a customer ended and Rockwell didn't have another lined up for me, I saw it as an opportunity to leave my position and commit fully to a web development bootcamp, Bloc.io. See my resume (in the sidebar) for more details.</p>
            <p>After Bloc.io I worked for a small startup called predictaBill. I was on an engineering team of two and reported directly to the CEO. We took data from user insurance plans and provider bills to find the optimal insurance plan for each user's medical needs. I worked about 70% backend (Node/Express and MongoDB)/30% frontend (React and Redux Sagas). I was in charge of building the comparison algorithm as well as the user interaction with their optimization results. I got to work directly with users to update that view and make their insurance information a little more palatable. In May 2020, unfortunately the company was hit by COVID and I was let go.</p>
            <p>My next adventure was Dispatch in Boston, MA, where I'm a full stack developer across React/React Native, Go, and Rails apps. I've been an individual contributer as well as leading the company's integration with Cronofy API to allow customers to link their third-party calendars with our scheduling. I've loved picking up Go so much that I've started leading the company's microservice standardization through documentation and template repo to ensure uniformity and ease of understanding in our go repos. I've also led automation of our Go API documentation using <a className="link about-link" href="https://goswagger.io/">go-swagger</a>.</p>
          </section>
          <section id="about-bootcamp" className={showAbout === "bootcamp" ? "" : "hidden"}>
            <p>I wanted a focused way to start web development, and I decided a coding bootcamp would be the perfect starting place. Bloc.io was a 6 month bootcamp that I completed in May 2019. In it, I learned the basics of HTML and CSS and dove into JavaScript as well as added onto my SQL knowledge. I picked up React (one of my first apps was a <a className="link about-link" href="https://github.com/piontekle/bloc-jams-react" target="_blank" rel="noreferrer">music app</a>) and Node (started at a <a className="link about-link" href="https://github.com/piontekle/address-bloc" target="_blank" rel="noreferrer">CLI address book</a> and moved to build a <a className="link about-link" href="https://github.com/piontekle/bloccit" target="_blank" rel="noreferrer">Reddit replica</a>), and using Express and PostgreSQL along the way.</p>
            <p>Now I'm continuing to work on my own <Link className="link about-link" to="/projects">projects</Link> and learn new skills. I've started learning Python and am always looking for something new.</p>
          </section>
          <section id="about-personal" className={showAbout === "personal" ? "" : "hidden"}>
            <p>In my free time I'm either playing ultimate frisbee, hiking, sticking my nose in a book (either a biography or Sci-Fi/Fantasy most likely), daydreaming about getting a dog or three, or reading up on my random animal facts.</p>
            <p className="personal-p">
            <a href="https://www.ultiphotos.com/pul/nygridlock/columbus/5-4/highlights/ecac6f71b" title="New York Gridlock v Columbus Pride 5-4-19" target="_blank" rel="noreferrer"><img className="ulti-pic" src="https://www.ultiphotos.com/img/s/v-10/p3402037019-2.jpg" width="400" height="267" alt="UltiPhotos: Highlights - New York Gridlock vs Columbus Pride - 5/4/19 &emdash; New York Gridlock v Columbus Pride 5-4-19" /></a> While I was in Indianapolis, I co-founded its first women's professional Ultimate frisbee team, <a className="link about-link" href="https://indyred.org/" target="_blank" rel="noreferrer">Indianapolis Red</a> in 2018. We were able to fund our entire first season and put on two major home games that, along with merchandise sales, allowed us to not only payback our funders, but gained money for the next year. It's now part of the <a className="link about-link" href="https://www.premierultimateleague.com/">Premier Ultimate League</a>, where I was an athlete for the <a className="link about-link" href="https://www.nygridlockultimate.com/" target="_blank" rel="noreferrer">New York Gridlock</a> for 2019-2021. I'm taking a break from travel playing this year to play locally and enjoy Boston more. 
            <br/><br/>My athletics help support my baking and eating habit. My specialty is beer pumpkin bread, and I'm always working on perfecting oatmeal chocolate chip cookies. While no dietary restrictions myself, I love experimenting with alternative flours - coconut flour is my favorite so far. I'm always looking for a bagel place recommendation, and I'll try anything once.
            </p>
          </section>
        </section>
      </>
    )
  }
}

export default About;
