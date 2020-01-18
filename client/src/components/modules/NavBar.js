import React, { Component } from "react";
import { Link } from "@reach/router";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "121479668229-t5j82jrbi9oejh7c8avada226s75bopn.apps.googleusercontent.com";

class NavBar extends Component {
    constructor(props) {
      super(props);
      // Initialize Default State
      this.state = {};
    }
  
    componentDidMount() {
      // remember -- api calls go here!
    }

    render() {
        return (
            <div>
                [insert app name]
                <Link to='/'>
                    Feed
                </Link>
                <Link to='/profile'>
                    Profile
                </Link>
                <Link to='/chat'>
                    Chatbook
                </Link>
            </div>
        );
    }
}

export default NavBar;