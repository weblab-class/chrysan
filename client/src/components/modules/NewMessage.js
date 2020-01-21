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
        console.log(body);
        post("/api/message", body);
    }
     
    render() {
        return(<div>
            <input type="text" onChange={this.textChange}/>
            <button onClick={this.sendMessage}>Submit</button>
        </div>
        );
    }
}

export default NewMessage

