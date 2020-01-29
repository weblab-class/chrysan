import React, { Component } from "react";
import { Link } from "@reach/router";
import ButtonBuy from "./ButtonBuy.js";
import ButtonRent from "./ButtonRent.js";

import "./SingleDescription.css";
import "../../utilities.css";


/**
 * SingleDescription is a component that renders the description of a product
 * in the SinglePage for that specific product
 *
 * Proptypes
 * @param {ProductObject} product
  
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
            price = {this.props.product.price}
            /> 
            <div className = "Page-textContainer" >
                <div className = "Page-productName u-inlineBlock">
                    {this.props.product.product_name}
                </div>
                <div> sold by {this.props.product.seller.name} <div/>
                <div> {this.props.product.description} </div>
            </div>
        </div>
        </div>
    );
  }
}

export default SingleDescription;