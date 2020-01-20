import React, { Component } from "react";
import { get } from "../../utilities";
import Card from "../modules/Card.js";

class Profile extends Component {
    constructor(props) {
      super(props);
      // Initialize Default State
      this.state = {
        user: undefined,
      };
    }
  
    componentDidMount() {
      console.log(this.props.userId)
      get(`/api/user`, { userid: this.props.userId }).then((user) => this.setState({ user: user }))
      console.log(this.state.user)
    }

  
    render() {
        return (
            <div>
              <h1> {this.state.user} </h1>
                This is the profile page
              <Card />
              <Card />
            </div>
        );
    }}

    export default Profile;