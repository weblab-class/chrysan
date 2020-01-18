import React, { Component } from "react";
import { Router } from "@reach/router";
import Profile from "./pages/Profile.js";
import NavBar from "./modules/NavBar.js";
import Chatbook from "./pages/Chatbook.js";
import Feed from "./pages/Feed.js";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../utilities.css";
import "./App.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

const GOOGLE_CLIENT_ID = "510579889189-t2m19hbnj6ht508ith1u5bjgfnigsvfv.apps.googleusercontent.com";

class App extends Component {
  // makes props available in this component
  constructor(props) {
    super(props);
    this.state = {
      userId: undefined,
    };
  }

  componentDidMount() {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        this.setState({ userId: user._id });
      }
    });
  }

  handleLogin = (res) => {
    console.log(`Logged in as ${res.profileObj.name}`);
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken }).then((user) => {
      this.setState({ userId: user._id });
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  handleLogout = () => {
    this.setState({ userId: undefined });
    post("/api/logout");
  };

  render() {
    return (
      <div className="AppContainer">
        <NavBar 
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout}
          userId={this.state.userId}
        />
        <Router>
          <Feed path="/" />
          <Profile path="/profile" />
          <Chatbook path="/chat" />
        </Router>
        {this.props.userId ? (
          <GoogleLogout
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={this.props.handleLogout}
            onFailure={(err) => console.log(err)}
          />
        ) : (
          <GoogleLogin
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={this.props.handleLogin}
            onFailure={(err) => console.log(err)}
          />
        )}
      </div>
    );
  }
}

export default App;
