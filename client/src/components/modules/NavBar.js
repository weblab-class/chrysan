import React, { Component } from "react";
import { Link } from "@reach/router";
import GoogleLogin, { GoogleLogout } from "react-google-login";

const GOOGLE_CLIENT_ID = "510579889189-t2m19hbnj6ht508ith1u5bjgfnigsvfv.apps.googleusercontent.com";

import "./NavBar.css";

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
            <nav className = "NavBar-container">
                <span className = "NavBar-title u-inlineBlock">
                    chrysan
                </span>
                <span className = "NavBar-linkContainer u-inlineBlock">
                    <Link to='/' className = "NavBar-link">
                        Feed
                    </Link>
                    <Link to={`/profile/${this.props.userId}`} className = "NavBar-link">
                        Profile
                    </Link>
                    <Link to='/chat' className = "NavBar-link">
                        Chatbook
                    </Link>
                    <Link to='/upload' className = "NavBar-link">
                        Upload
                    </Link>
                </span>
                {this.props.userId ? (
                    <GoogleLogout
                        clientId={GOOGLE_CLIENT_ID}
                        buttonText="Logout"
                        onLogoutSuccess={this.props.handleLogout}
                        onFailure={(err) => console.log(err)}
                        className = "NavBar-link NavBar-login"
                    />
                    ) : (
                    <GoogleLogin
                        clientId={GOOGLE_CLIENT_ID}
                        buttonText="Login"
                        onSuccess={this.props.handleLogin}
                        onFailure={(err) => console.log(err)}
                        className = "NavBar-link NavBar-login"
                    />
                    )}
             </nav>
        );
    }
}

export default NavBar;