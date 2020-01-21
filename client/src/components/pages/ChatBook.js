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
]

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
    this.state = {
      activeChat : {
        recipient : ALL_CHAT,
        messages : TEST_MESSAGES,
      }
    };
  }

  loadMessageHistory () {
    get("/api/chat", { recipient_id: this.state.activeChat.recipient._id }).then((newMessages) => {
      //console.log(newMessages);
      this.setState({
        activeChat : {
          recipient: this.state.activeChat.recipient,
          messages: newMessages,
        },
      })
    });
  }

  componentDidMount() {
    this.loadMessageHistory();
    console.log("before socket)");
    socket.on("message", (data) => {
      this.setState((prevstate) => ({
        activeChat: {
          recipient: prevstate.activeChat.recipient,
          messages: prevstate.activeChat.messages.concat(data),
        },
      }));
    });
  }

  render() {
    return (
      <div className="Chatbook-container">
        <Chat data={this.state.activeChat}/>
      </ div>
    );
  }
}

export default Chatbook;