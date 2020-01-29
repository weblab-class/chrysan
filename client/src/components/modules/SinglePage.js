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
      console.log(this.props.productId);
      var query = {_id: this.props.productId};
      get("/api/products").then((productObjs) => {
        productObjs.filter(productObj => productObj._id === this.props.productId)
        .map((productObj) => {
          //this.setState({ products: this.state.products.concat([productObj]) });
          this.setState({
            product : productObj,
          })
        });
      });
      // get("/api/singleproduct", query).then((productObj) => {
      //   this.setState({
      //     product: productObj,
      //   })
      // });
    }
  
    render() {
      if (this.state.product === undefined) {
        return(<div></div>);
      } else {
        return(
          <div className = "SinglePage-container">
            <img size="600px" src={this.state.product.imageURL}/>
            <SingleDescription product={this.state.product}/>
          </div>
        );
      }
    }}

    export default SinglePage;