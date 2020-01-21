import React, { Component } from "react";

import "./ButtonBuy.css";
import "../../utilities.css";

/**
 * ButtonBuy is a button that shows the buy price
 *
 * Proptypes
 * @param {string} buy_price
 */
class ButtonBuy extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
        <button className = "ButtonBuy">
            Buy for ${this.props.price}
        </button> 
        )
    }}

export default ButtonBuy;