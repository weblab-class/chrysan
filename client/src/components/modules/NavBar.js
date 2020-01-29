import React, { Component } from "react";
import { Link } from "@reach/router";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import Dropdown from "./Dropdown.js";
import { get } from "../../utilities";

import "./NavBar.css";

// google login stuff lmao
const GOOGLE_CLIENT_ID = "510579889189-t2m19hbnj6ht508ith1u5bjgfnigsvfv.apps.googleusercontent.com";

// start
class NavBar extends Component {
    constructor(props) {
      super(props)
      this.state = {
        user: undefined,
      };
    }
    // login stuff, just in case it messes up
    setUser = () => {
        get(`/api/user`, { userId: this.props.userId }).then((user) => this.setState({ user: user }));
      }
    
    componentDidUpdate(oldProps) {
        // this is called whenever the props change (call API again if the userId changes)
        if (oldProps.userId !== this.props.userId) {
          this.setUser();
        }
      }

    // classic
    componentDidMount() {
        console.log(this.state)
        this.setUser();
        console.log(this.state)
    }

    render() {
        return (
            <nav className = "NavBar-container">
                {/* other links */}
                <span className = "NavBar-title u-inlineBlock">
                    chrysan
                </span>
                <span className = "NavBar-linkContainer u-inlineBlock">
                    <Link to='/' className = "NavBar-link">
                        Home
                    </Link>
                    <Link to={`/profile/${this.props.userId}`} className = "NavBar-link">
                        Profile
                    </Link>
                    <Link to='/chat' className = "NavBar-link">
                        Messages
                    </Link>
                    <Link to='/upload' className="NavBar-link">
                        Upload
                    </Link>
                </span>
                
                {/* login stuffs */}
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