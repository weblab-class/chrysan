import React, { Component } from "react";
import Sample from "../../sample.png"
import ButtonBuy from "./ButtonBuy.js";
import ButtonRent from "./ButtonRent.js";

/**
 * SinglePage displays detailed view of item being sold
 *
 * Proptypes
 * @param {string} product_name
 * @param {string} product_id
 * @param {string} seller_name
 * @param {string} seller_id
 */

class SinglePage extends Component {
    constructor(props) {
      super(props);
      // Initialize Default State
      this.state = {
        image: Sample
      };
    }
  
    componentDidMount() {
    }

  
    render() {
        return (
            <div className = "SinglePage-container">
              <img src = {this.state.image}/>
              <div>
                  {this.props.product_name}
              </div>
              <div>
                {(this.props.sell) && 
                <ButtonBuy 
                    buy_price = {this.props.buy_price}/> }
                {(this.props.rent) && 
                <ButtonRent
                    rent_price = {this.props.rent_price} /> }
              </div>
              
            </div>
        );
    }}

    export default SinglePage;