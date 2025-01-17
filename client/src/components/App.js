import React, { Component } from "react";
import { Router } from "@reach/router";
import Profile from "./pages/Profile.js";
import Upload from "./pages/Upload.js";
import NavBar from "./modules/NavBar.js";
import Chatbook from "./pages/ChatBook.js";
import Feed from "./pages/Feed.js";
import Saved from "./pages/Saved.js";
import Edit from "./pages/Edit.js";
import SinglePage from "./modules/SinglePage.js";
import { socket } from "../client-socket.js";
import { get, post } from "../utilities";

import "../utilities.css";
import "./App.css";

const GOOGLE_CLIENT_ID = "512988024984-fdj85n7vm82hqn2ohpl843pod762ju1v.apps.googleusercontent.com";

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
          <Profile path="/profile/:userId"
            userId= {this.state.userId}/>
          <Chatbook path="/chat" userId={this.state.userId} />
          <SinglePage path="/product/:productId" />
          <Upload path="/upload" 
            userId= {this.state.userId}/>
          <Saved path="/saved" 
            userId= {this.state.userId}/>
          <Edit path="/edit" 
            userId= {this.state.userId}/>
        </Router>
      </div>
    );
  }
}

export default App;
