import React, { Component } from "react";
import { Link } from "@reach/router";
import Buy from "../../buy.png";
import Rent from "../../rent.png";
import Haggle from "../../haggle.png";

import "./ClothingInfo.css";
import "../../utilities.css";

/**
 * Story is a component that renders creator and content of a story
 *
 * Proptypes
 * @param {string} _id of the story
 * @param {string} creator_name
 * @param {string} creator_id
 * @param {string} content of the story
 */
class ClothingInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
        <div>
            <div className = "Info-iconContainer" >
                {/* all conditional buttons */}
                {/* buy */}
                {(Buy) && 
                <button className = "Info-button">
                    Buy for ${this.props.buy_price}
                </button> }
                {/* // <img src = {Buy} className = "Info-icon"/> } */}
                {/* rent */}
                {(Rent) && 
                <button className = "Info-button">
                    Rent for ${this.props.rent_price}
                </button> }
                {/* haggle
                {(Haggle) && 
                <img src = {Haggle} className = "Info-icon"/> } */}
            </div>
            <div className = "Info-textContainer" >
                <div className = "Info-productName u-inlineBlock">
                    {this.props.product_name}
                </div>
            </div>
      </div>
    );
  }
}

export default ClothingInfo;