import React, { Component } from "react";
import { get } from "../../utilities";
import ClothingInfo from "../modules/ClothingInfo.js";
import Image from "../modules/Image.js";
import Sample from "../../sample.png"

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
      <div className="Card-container u-flex-alignCenter">
          <Image className = "Card-image u-flex-alignCenter"/>
          <ClothingInfo className = "Card-info"/>
      </div>
    );
  }
}

export default Card;


