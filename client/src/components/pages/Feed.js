import React, { Component } from "react";
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
      let productsList = this.state.products.map((productObj) => (
        <div className = "Profile-cardContainer">
        <Card
          product_name= {productObj.product_name}
          price= {productObj.price}
          seller_name = {productObj.seller.name}
          productId = {productObj._id}
          fileName = {productObj.fileName}
        />
      </div>
      ))
    return (
      <div>
        <div className = "Feed-searchContainer">
          {/* search bar that is currently not functional */}
          <input
            type = "text"
            // value = {this.state.inputText}
            // onChange = {this.handleInputChange}
          />
          <span>
            <button>
              search
            </button>
          </span>
        </div>
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
