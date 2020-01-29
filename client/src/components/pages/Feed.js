import React, { Component } from "react";
import { Router } from "@reach/router";
import Card from "../modules/Card.js";
import { get } from "../../utilities";

import "./Feed.css";

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    document.title = "Home";
    get("/api/products").then((productObjs) => {
      productObjs.map((productObj) => {
        this.setState({ products: this.state.products.concat([productObj]) });
      });
    });
}

  render() {
      let productsList = this.state.products.map((productObj, i) => (
        <div className = "Profile-cardContainer">
        <Card
          product_name= {productObj.product_name}
          price= {productObj.price}
          seller_name = {productObj.seller.name}
          seller_id = {productObj.seller._id}
          productId = {productObj._id}
          imageURL= {productObj.imageURL}
          key = {i}
        />
      </div>
      ))
    return (
      <div>
        <div className = "u-textCenter">
          <div className = "Feed-title">CHRYSAN</div>
          <div>browse all items here!</div>
        </div>
        <div className="Feed-container">
          {productsList}
        </div>
      </div>
    );
    }
}

export default Feed;
