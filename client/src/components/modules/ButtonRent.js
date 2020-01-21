import React, { Component } from "react";

import "./ButtonRent.css";
import "../../utilities.css";

/**
 * ButtonRent is a button that shows the rent price
 *
 * Proptypes
 * @param {string} buy_price
 */
class ButtonRent extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
        <button className = "ButtonRent">
            Rent for ${this.props.rent_price}
        </button> 
        )
    }}

export default ButtonRent;