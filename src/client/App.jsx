import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './app.css';

import { withAuth } from './components/admin/auth';

import { Header, Sidebar, Footer } from './components/nav';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';
import Admin from './components/admin';
import SignIn from './components/admin/signIn';
import BlogIndex from './components/blog';
import BlogPost from './components/blog/blogPost';
import NewBlog from './components/blog/newBlog';
import EditBlog from './components/blog/editBlog';

export default class App extends Component {

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
            <Route path="/sign-in" component={SignIn} />
            <Route path="/admin" component={withAuth(Admin)} />
            <Route exact path="/blog" component={BlogIndex} />
            <Route path="/blog/:title" component={BlogPost} />
            <Route path="/new-post" component={withAuth(NewBlog)} />
            <Route path="/:id/edit-post" component={withAuth(EditBlog)} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
