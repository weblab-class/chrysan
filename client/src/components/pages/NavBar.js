import React, { Component } from "react";

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
                what is a navbar
            <Link to="/" >
            Skeleton
            </Link>
            </div>
        );
    }
}

    export default NavBar;