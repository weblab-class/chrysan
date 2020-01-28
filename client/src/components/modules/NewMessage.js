import React, { Component } from "react";
import { post } from "../../utilities";

/**
 * New Message is a New Message component for messages
 *
 * Proptypes
 * @param {UserObject} recipient is the intended recipient
 */
/**
 * @typedef UserObject
 * @property {string} _id
 * @property {string} name
 */

class NewMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content:"",
        }
    };

    textChange = (event) => {
        this.setState({
            content : event.target.value,
        });
    }

    sendMessage = (event) => {
        const body = { recipient: this.props.recipient, content: this.state.content };
        document.getElementById("input-text").value=null;
        post("/api/message", body);
    }

    enterPressed = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            this.sendMessage();
        }
    }
     
    render() {
        return(<div>
            <textarea rows="5" cols="60" id="input-text" 
                onChange={this.textChange}
                onKeyPress={this.enterPressed}/>
            <button onClick={this.sendMessage}>Submit</button>
        </div>
        );
    }
}

export default NewMessage

