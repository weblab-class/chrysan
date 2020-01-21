import React, { Component } from "react";
import { Link } from "@reach/router";

import "./Image.css";

/**
 * Story is a component that renders creator and content of a story
 *
 * Proptypes
 * @param {string} product_name
 * @param {image} image
 */
class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div>
        <Link 
          to= {`/product/${this.props.product_name}`}
            // image= {this.props.image}
            // product_name= {this.props.product_name}
            // buy_price = {this.props.buy_price}
            // rent_price = {this.props.rent_price}
            // sell = {this.props.sell}
            // rent = {this.props.rent}
            // haggle = {this.state.haggle}
            >
          <img src = {this.props.image} />
        </Link>
      </div>
    );
  }
}

export default Image;