import React, { Component } from "react";
import { get } from "../../utilities";
import Card from "../modules/Card.js";

class SingleProduct extends Component {
    constructor(props) {
      super(props);
      // Initialize Default State
      this.state = {

      };
    }
  
    componentDidMount() {
    }

  
    render() {
        return (
            <div>
              fuck this class
              <img src = {this.props.image}/>
              <button>
                  buy
              </button>
              <button>
                  rent
              </button>
            </div>
        );
    }}

    export default SingleProduct;