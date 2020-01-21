import React, { Component } from "react";
import Sample from "../../sample.png"
import ButtonBuy from "./ButtonBuy.js";
import ButtonRent from "./ButtonRent.js";
import { get } from "../../utilities";
import SingleDescription from "../modules/SingleDescription.js";

import "./SinglePage.css";

/**
 * SinglePage displays detailed view of item being sold
 *
 * Proptypes
 * @param {string} product_name
 * @param {string} productId
 * @param {string} seller_name
 * @param {string} seller_id
 */

class SinglePage extends Component {
    constructor(props) {
      super(props);
      // Initialize Default State
      this.state = {
        image: Sample,
        product: undefined,
        products: []
      };
    }

    componentDidMount() {
      get("/api/products").then((productObjs) => {
        productObjs.filter(productObj => productObj._id === this.props.productId)
        .map((productObj) => {
          this.setState({ products: this.state.products.concat([productObj]) });
        });
      });
    }

    componentDidUpdate(oldProps) {
      // this is called whenever the props change (call API again if the userId changes)
      if (oldProps.productId !== this.props.productId) {
        this.setProduct();
      }
    }
  
    render() {
        return (
            <div className = "SinglePage-container">
              <img src = {this.state.image}/>
              <div>
                {this.state.products.map((p, i) => (
                  <SingleDescription product={p} key={i}/>
                ))}
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