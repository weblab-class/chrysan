import React, { Component } from "react";

class NewMessage extends Component {
    constructor(props) {
        super(props);
    };

    sendMessage = () => {
        console.log("print new message");
    }
     
    render() {
        return(<div>
            New Message rendered!
            <input type="text"/>
            <button onClick={this.sendMessage}>Submit</button>
        </div>
        );
    }
}

export default NewMessage

