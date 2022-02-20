import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import { Header, Sidebar, Footer } from './components/nav';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';
import BlogIndex from './components/blog';

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="app-container">
          <Header />
          <div className="app-body">
            <Sidebar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />

              <Route exact path="/blog" element={<BlogIndex />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
