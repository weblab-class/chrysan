import React, { Component } from "react";
import { get } from "../../utilities";

import "./Card.css";

/**
 * Card displays items being sold
 *
 * Proptypes
 * @param {string} _id of the card
 * @param {string} seller_name
 * @param {string} seller_id
 * @param {string} content of the story
 */

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="Card-container">
          a card!
      </div>
    );
  }
}

export default Card;


