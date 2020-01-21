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
    get("/api/products").then((productObjs) => {
      productObjs.map((productObj) => {
        this.setState({ products: this.state.products.concat([productObj]) });
      });
    });
    console.log(this.state.products)
}

  render() {
      let productsList = this.state.products.map((productObj) => (
        <div className = "Profile-cardContainer">
        <Card 
          key={`Card_${productObj._id}`}
          product_name= {productObj.product_name}
          price= {productObj.price}
        />
      </div>
      ))
    return (
      <div>
        <div>
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
        <div>
         
        </div>
        <div className="Feed-container">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
    }
}

export default Feed;
