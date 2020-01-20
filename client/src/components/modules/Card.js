import React, { Component } from "react";
import { get } from "../../utilities";
import ClothingInfo from "../modules/ClothingInfo.js";
import Image from "../modules/Image.js";
import Rent from "../../rent.png"

import "./Card.css";

/**
 * Card displays items being sold
 *
 * Proptypes
 * @param {string} _id of the card
 * @param {string} seller_name
 * @param {string} seller_id
 * @param {string} price of the product
 */

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_name: "ugly sweater",
      product_id: "123",
      seller_name: "emily",
      seller_id: "456",
      buy_price: "10",
      rent_price: "5",
      sell: true,
      rent: true,
      haggle: true,
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="Card-container u-flex-alignCenter">
          <Image className = "Card-image u-flex-alignCenter"/>
          <ClothingInfo 
            className = "Card-info"
            product_name = {this.state.product_name}
            buy_price = {this.state.buy_price}
            rent_price = {this.state.rent_price}
            sell = {this.state.sell}
            rent = {this.state.rent}
            haggle = {this.state.haggle}
            />
          <div>
            {/* {this.state.seller_name}  */}
          </div>
      </div>
    );
  }
}

export default Card;


