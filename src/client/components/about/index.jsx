import React, { Component } from 'react';
import './about.css';

class About extends Component {
  state = { showAbout: null }

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
          <p>I'm a full stack developer based in Brooklyn, NY. I was born and raised in St. Louis, MO where I enjoyed the no. 1 free zoo in the country and played under the Gateway Arch. Thanks to 6 years of Zoo and Science Center camps mixed with a DIY-oriented family, I grew up curious and always looking to experiment with something. From there I attend University of Missouri - Columbia (aka: Mizzou), where I started as a Communications and Political Science dual major. Long story short, I graduated in spring 2015 with my BS in Mechanical Engineering and a minor in Spanish.</p>
          <button
            className="link"
            onClick={() => this.showClick('professional')}
          >
            About Professional Experience
          </button>
          <button
            className="link"
            onClick={() => this.showClick('bootcamp')}
          >
            About Coding Bootcamp
          </button>
          <button
            className="link"
            onClick={() => this.showClick('personal')}
          >
            About Personal Life
          </button>
        </section>
        <section className={showAbout ? "card about-card" : "hidden"}>
          <p className={showAbout === "professional" ? "" : "hidden"} id="about-professional">
            Out of college, I was hired for the position of Safety Engineer with Rockwell Automation and went through their Engineering in Training (EIT) program to learn all about supporting and developing Rockwell software. This is where I first realized how much I enjoyed software and started doing CodeAcademy Ruby classes and exercism challenges in my free time. A year into my time with Rockwell, I transferred to the position of Software Field Support Engineer, getting to focus more on development and implementation but still primarily in Rockwell proprietary languages. When my contract with a customer ended and Rockwell didn't have another lined up for me, I saw it as an opportunity to leave my position and commit fully to a web development bootcamp, Bloc.
          </p>
          <p id="about-bootcamp" className={showAbout === "bootcamp" ? "" : "hidden"}>
            BLOC BOOTCAMP SUMMARY
          </p>
          <p id="about-personal" className={showAbout === "personal" ? "" : "hidden"}>
            PERSONAL LIFE SUMMARY
          </p>
        </section>
      </>
    )
  }
}

export default About;
