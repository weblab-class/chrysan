import React, { Component } from "react";
import { get } from "../../utilities";

class Profile extends Component {
    constructor(props) {
      super(props);
      // Initialize Default State
      this.state = {
        user: ''
      };
    }
  
    componentDidMount() {
      get(`api/user`, {userId: this.props.userId}).then((user) => {
        this.setState({user: user})
      })
      console.log(this.props.userId)
    }

    render() {
        return (
            <div>
              <h1>
                {this.state.user.name}
              </h1>
                This is the profile page
            </div>
        );
    }}

    export default Profile;