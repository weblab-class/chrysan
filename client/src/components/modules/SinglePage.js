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
 * @param {string} imageURL
 */

class SinglePage extends Component {
    constructor(props) {
      super(props);
      // Initialize Default State
      this.state = {
        image: "",
        product: undefined,
        products: []
      };
    }

    componentDidMount() {
      get("/api/products").then((productObjs) => {
        productObjs.filter(productObj => productObj._id === this.props.productId)
        .map((productObj) => {
          //this.setState({ products: this.state.products.concat([productObj]) });
          this.setState({
            product : productObj,
          })
        });
      });
    }
  
    render() {
      return (
        <div>{this.props.productId}</div>
      );
      // console.log(this.state.product);
      // if (this.state.product !== undefined) {
      //   console.log("product description hit");
      //   return (
      //     <div className = "SinglePage-container">
      //       <img src = {this.state.product.imageURL}/>
      //       <div>
      //         {this.state.products.map((p, i) => (
      //           <SingleDescription product={p} key={i}/>
      //         ))}
      //       </div>
      //       <div>
      //         {(this.props.sell) && 
      //         <ButtonBuy 
      //             buy_price = {this.props.buy_price}/> }
      //         {(this.props.rent) && 
      //         <ButtonRent
      //             rent_price = {this.props.rent_price} /> }
      //       </div>
            
      //     </div>
      //   );
      // } else {
      //   console.log("initial render hit");
      //   return (
      //     <div>You have uploaded no products.</div>
      //   )
      // }
    }}

    export default SinglePage;