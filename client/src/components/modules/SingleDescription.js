import React, { Component } from "react";
import { Link } from "@reach/router";
import ButtonBuy from "./ButtonBuy.js";
import ButtonRent from "./ButtonRent.js";

import "./SingleDescription.css";
import "../../utilities.css";


/**
 * Story is a component that renders creator and content of a story
 *
 * Proptypes
 * @param {string} product_name
 * @param {string} buy_price
 * @param {string} rent_price
 * @param {string} sell
 * @param {string} rent
 * @param {string} haggle
  
 */
class SingleDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
        <div>
          <ButtonBuy
            price = {this.props.price}
            /> 
            {/* <div className = "Info-iconContainer" >
                {(this.props.sell) && 
                <ButtonBuy 
                  buy_price = {this.props.buy_price}/> }
                {(this.props.rent) && 
                <ButtonRent
                  rent_price = {this.props.rent_price} /> }
            </div> */}
            <div className = "Info-textContainer" >
                <div className = "Info-productName u-inlineBlock">
                    {this.props.product_name}, sold by {this.props.seller_name}
                </div>
            </div>
      </div>
    );
  }
}

export default CardInfo;