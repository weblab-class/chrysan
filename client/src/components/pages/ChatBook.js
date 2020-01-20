import React, { Component } from "react";
import ChatList from "../modules/ChatList.js";
import Chat from "../modules/Chat.js";
import { socket } from "../../client-socket.js";
import { get } from "../../utilities";

import "./Chatbook.css"

const ALL_CHAT = {
  _id: "ALL_CHAT",
  name: "ALL CHAT",
};

const TEST_MESSAGES = [
  {
    sender: {
      _id: 0,
      name: "grace",
    },
    content: "i am struggling",
  },

  {
    sender: {
      _id: 1,
      name: "emily",
    },
    content: "css is confusing",
  },

  {
    sender: {
      _id: 2,
      name: "michelle",
    },
    content: "i love pens",
  },
]

const TEST_DATA = {
  recipient : "grace",
  messages : TEST_MESSAGES,
}

class Chatbook extends Component {
  /**
   * @typedef UserObject
   * @property {string} _id
   * @property {string} name
   */
  /**
   * @typedef MessageObject
   * @property {UserObject} sender
   * @property {string} content
   */
  /**
   * @typedef ChatData
   * @property {MessageObject[]} messages
   * @property {UserObject} recipient
   */

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="Chatbook-container">
        <Chat data={TEST_DATA}/>
      </ div>
    );
  }
}

export default Chatbook;