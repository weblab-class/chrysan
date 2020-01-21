// Renders a single chat message

import React, { Component } from "react";

/**
 * Renders a single chat message
 *
 * Proptypes
 * @param {MessageObject} message
 */

class SingleMessage extends Component {

    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div >
          <span>{this.props.message.sender.name + ":"}</span>
          <span>{this.props.message.content}</span>
        </div>
      );
    }
  }
  
  export default SingleMessage;