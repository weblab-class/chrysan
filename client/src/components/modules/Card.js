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
 * @param {string} price
 */

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      // seller_name: "emily",
      // seller_id: "456",
      // buy_price: "10",
      // rent_price: "5",
      // sell: true,
      // rent: true,
      // haggle: true,
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
            // buy_price = {this.state.buy_price}
            // rent_price = {this.state.rent_price}
            // sell = {this.state.sell}
            // rent = {this.state.rent}
            image = {this.state.image}
            />
          <CardInfo 
            className = "Card-info"
            product_name = {this.props.product_name}
            price = {this.props.price}
            seller_name = {this.props.seller_name}
            // rent_price = {this.state.rent_price}
            // sell = {this.state.sell}
            // rent = {this.state.rent}
            // haggle = {this.state.haggle}
            />
          <div>
            {/* {this.state.seller_name}  */}
          </div>
      </div>
    );
  }
}

export default Card;


