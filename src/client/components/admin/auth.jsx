import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const AuthUserContext = React.createContext(null);

function withAuth(AdminComponent) {
  return class extends Component {
    constructor() {
      super();

      this.state = {
        admin: false,
        loading: true,
        redirect: false
      }

    }

    getURL() {
      let host = window.location.hostname;
      let protocol = window.location.protocol;
      let url = null;

      if (host === "localhost") {
        url = protocol + "//" + host + ":8080"
      } else {
        url = protocol + "//" + "piontekle.herokuapp.com"
      }

      return url
    }

    componentDidMount() {
      console.log('calling checkAdmin')
      let url = this.getURL();

      axios.get(`${url}/api/checkAdmin`)
      .then(res => {
        if (res.status === 200) {
          this.setState({
            admin: true,
            loading: false
          });
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({
          loading: false,
          redirect: true
        })
      })
    }

    render() {
      const { admin, loading, redirect } = this.state;

      if (loading) {
        return (<div>Loading Admin...</div>)
      }

      if (redirect) {
        return <Redirect to="/sign-in" />;
      }

      return (
        <AuthUserContext.Provider value={admin}>
          <AdminComponent {...this.props} />
        </AuthUserContext.Provider>
      )
    }
  }
}


export { AuthUserContext, withAuth };
