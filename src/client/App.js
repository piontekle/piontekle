import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './app.css';

import { Header, Sidebar, Footer } from './components/nav';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
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
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
