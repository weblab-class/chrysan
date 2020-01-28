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
      activeUsers : [],
      activeChat : {
        recipient : ALL_CHAT,
        messages : [],
      }
    };
  }

  loadMessageHistory(recipient) {
    get("/api/chat", { recipient_id: recipient._id }).then((messages) => {
      this.setState({
        activeChat: {
          recipient: recipient,
          messages: messages,
        },
      });
    });
  }

  componentDidMount() {
    document.title = "Chrysan Chat";

    //this.loadMessageHistory(ALL_CHAT);

    get("/api/activeUsers").then((data) => {
      this.setState({
        activeUsers: [].concat(data.activeUsers),
      });
    });

    socket.on("message", (data) => {
      console.log("Checking ", data);
      console.log("State ", this.state);
      console.log("Props", this.props);
      if (
        (data.recipient._id === this.state.activeChat.recipient._id &&
          data.sender._id === this.props.userId) ||
        (data.sender._id === this.state.activeChat.recipient._id &&
          data.recipient._id === this.props.userId) ||
        (data.recipient._id === "ALL_CHAT" && this.state.activeChat.recipient._id === "ALL_CHAT")
      ) {
        this.setState((prevstate) => ({
          activeChat: {
            recipient: prevstate.activeChat.recipient,
            messages: prevstate.activeChat.messages.concat(data),
          },
        }));
      }
    });
    socket.on("activeUsers", (data) => {
      this.setState({
        activeUsers: [ALL_CHAT].concat(data.activeUsers),
      });
    });
  }

  setActiveUser = (user) => {
    this.loadMessageHistory(user);
    this.setState({
      activeChat: {
        recipient: user,
        messages: [],
      },
    });
  };

  render() {
    return (
      <div className="Chatbook-container">
        <ChatList 
          users={this.state.activeUsers} 
          setActiveUser={this.setActiveUser} 
          userId={this.props.userId} 
          active={this.state.activeChat.recipient}/>
        <div className="Chatbook-chatContainer u-relative">
            <Chat data={this.state.activeChat} />
        </div>
      </ div>
    );
  }
}

export default Chatbook;