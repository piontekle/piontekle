import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
          <img className="about-pic" src="https://live.staticflickr.com/65535/48688483166_21fe268bcf_m.jpg" alt="MIZ_me" />
          <p>I'm a full stack developer based in Brooklyn, NY. I was born and raised in St. Louis, MO where I enjoyed the no. 1 free zoo in the country and played under the Gateway Arch. Thanks to 6 years of Zoo and Science Center camps mixed with a DIY-oriented family, I grew up curious and always looking to experiment with something. From there I attend University of Missouri - Columbia (aka: Mizzou), where I started as a Communications and Political Science dual major. Long story short, I graduated in spring 2015 with my BS in Mechanical Engineering and a minor in Spanish.</p>
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
          </section>
          <section id="about-bootcamp" className={showAbout === "bootcamp" ? "" : "hidden"}>
            <p>I wanted a focuses way to start web development, and I decided a coding bootcamp would be the perfect starting place. Bloc.io was a 6 month bootcamp that I completed in May 2019. In it, I learned the basics of HTML and CSS and dove in JavaScript as well as added onto my SQL knowledge. I picked up React (one of my first apps was a <a className="link about-link" href="https://github.com/piontekle/bloc-jams-react" target="_blank">music app</a>) and Node (started at a <a className="link about-link" href="https://github.com/piontekle/address-bloc" target="_blank">CLI address book</a> and moved to build a <a className="link about-link" href="https://github.com/piontekle/bloccit" target="_blank">Reddit replica</a>), and using Express and PostgreSQL along the way.</p>
            <p>Now I'm continuing to work on my own <Link className="link about-link" to="/projects">projects</Link> and learn new skills. I'm starting to develop in Angular and working on solidifying my Ruby skills.</p>
          </section>
          <section id="about-personal" className={showAbout === "personal" ? "" : "hidden"}>
            <p>In my free time I'm either playing ultimate frisbee, hiking, sticking my nose in a book (either a joke book or Sci-Fi/Fantasy most likely), daydreaming about getting a dog or three, or reading up on my random animal facts.</p>
            <p className="personal-p">
            <a href="https://www.ultiphotos.com/pul/nygridlock/columbus/5-4/highlights/ecac6f71b" title="New York Gridlock v Columbus Pride 5-4-19" target="_blank"><img className="ulti-pic" src="https://www.ultiphotos.com/img/s/v-10/p3402037019-2.jpg" width="400" height="267" alt="UltiPhotos: Highlights - New York Gridlock vs Columbus Pride - 5/4/19 &emdash; New York Gridlock v Columbus Pride 5-4-19" /></a> While I was in Indianapolis, I co-founded its first women's professional Ultimate frisbee team, <a className="link about-link" href="https://indyred.org/" target="_blank">Indianapolis Red</a> in 2018. We were able to fund our entire first season and put on two major home games that, along with merchandise sales, allowed us to not only payback our funders, but gained money for the next year. It's now part of the <a className="link about-link" href="https://www.premierultimateleague.com/">Premier Ultimate League</a>, where I'm now an athlete for the <a className="link about-link" href="https://www.nygridlockultimate.com/" target="_blank">New York Gridlock</a>.
            <br/><br/>My athletics help support my baking and eating habit. My specialty is beer pumpkin bread, and I'm always working on perfecting oatmeal chocolate chip cookies. While no dietary restrictions myself, I love experimenting with alternative flours - coconut flour is my favorite so far. I'm always looking for a bagel place recommendation, and I'll try anything once.
            </p>
          </section>
        </section>
      </>
    )
  }
}

export default About;
