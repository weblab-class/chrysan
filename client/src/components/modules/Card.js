import React, { Component } from "react";
import { get } from "../../utilities";
import CardInfo from "./CardInfo.js";
import Image from "./Image.js";
import Sample from "../../sample.png"

import "./Card.css";

/**
 * Card displays items being sold
 *
 * Proptypes
 * @param {string} product_name
 * @param {string} productId
 * @param {string} price
 * @param {string} seller_name
 * @param {string} fileName
 */

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      image: Sample,
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="Card-container u-flex-alignCenter">
          <Image
            className = "Card-image u-flex-alignCenter"
            product_name = {this.props.product_name}
            productId = {this.props.productId}
            imageURL = {this.props.imageURL}
            />
          <CardInfo 
            className = "Card-info"
            product_name = {this.props.product_name}
            price = {this.props.price}
            seller_name = {this.props.seller_name}
            productId = {this.props.productId}
            />
      </div>
    );
  }
}

export default Card;


