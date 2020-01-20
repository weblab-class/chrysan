import React, { Component } from "react";
import { Link } from "@reach/router";
import GoogleLogin, { GoogleLogout } from "react-google-login";

const GOOGLE_CLIENT_ID = "510579889189-t2m19hbnj6ht508ith1u5bjgfnigsvfv.apps.googleusercontent.com";

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
                <Link to='/profile/:userId'>
                    Profile
                </Link>
                <Link to='/chat'>
                    Chatbook
                </Link>
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

export default NavBar;