import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './app.css';

import { Header, Sidebar, Footer } from './components/nav';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';

export default class App extends Component {
  connectToServer() {
    fetch('/');
  }

  componentDidMount() {
    this.connectToServer();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app-container">
          <Header />
          <div className="app-body">
            <Sidebar />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/skills" component={Skills} />
            <Route path="/contact" component={Contact} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
