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

    setUser = () => {
      console.log(this.props.userId);
      get(`/api/user`, { userId: this.props.userId }).then((user) => this.setState({ user: user }));
    }
  
    componentDidMount() {
      this.setUser();
    }

    componentDidUpdate(oldProps) {
      // this is called whenever the props change (call API again if the userId changes)
      if (oldProps.userId !== this.props.userId) {
        this.setUser();
      }
    }

  
    render() {
      if (!this.state.user) {
        return <div> Loading! </div>;
      }
        return (
            <div>
              <h1> {this.state.user.name} </h1>
                This is the profile page
              <Card />
              <Card />
            </div>
        );
    }}

    export default Profile;