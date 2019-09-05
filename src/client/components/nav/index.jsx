import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Header = () => (
  <header>
    <Link to="/">
      <section id="pro-pic-rect">
        <img src="https://lh3.googleusercontent.com/EZiKdK-w6XtLrvnL6DNRFztTmxVgoNroKbdHFYIMADOF3_buDt4SLNv7lBUGORL0WuPdUcN8UzcCUdGJMPlm_XjS3qLUcNUR5yijCDlJ0HlCbKkIDVrnyn7ywUNfMHtTT_addtdbSw=w2400" id="pro-pic" alt="LP-pic"/>
      </section>
    </Link>
    <nav id="header-nav">
      <Link className="link header-link" to="/about">About</Link>
      <Link className="link header-link" to="/projects">Projects</Link>
      <Link className="link header-link" to="/skills">Skills</Link>
    </nav>
  </header>
)


const Sidebar = () => (
  <section id="sidebar">
    <a className="link" href="https://drive.google.com/file/d/1ZoS0h7HZtxJsc4K-FB_AH1xBXwVr113T/view?usp=sharing"><img className="icon" src="https://live.staticflickr.com/65535/48683705156_61bc0bba51_z.jpg"  alt="email-icon"/></a>
    <a className="link" href="https://github.com/piontekle" target="_blank"><img className="icon" src="https://live.staticflickr.com/65535/48683705136_fc7a122ab2_z.jpg"  alt="git-icon"/></a>
    <a className="link" href="https://linkedin.com/in/piontekle" target="_blank"><img className="icon" src="https://live.staticflickr.com/65535/48683705116_7549316d28_z.jpg"  alt="linkedin-icon"/></a>
  </section>
)

const Footer = () => (
  <footer>
    <nav id="footer-nav">
      <a className="link footer-link" href="https://github.com/crsandeep/simple-react-full-stack" target="_blank">Boilerplate</a>
      <Link className="link footer-link" to="/">Admin</Link>
    </nav>
  </footer>
)

export {Header, Sidebar, Footer};
