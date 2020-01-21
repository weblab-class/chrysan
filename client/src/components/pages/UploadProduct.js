import React, { Component } from "react";
import { NewProduct } from "../modules/NewProductInput.js";

import "./Feed.css";
import { post } from "../../utilities.js";

class UploadProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
        product_name: "",
        price: "",
        defaultText: "no name"
    };
  }

  componentDidMount() {
  }
 
  render() {
    return (
      <div>
        <NewProduct addNewProduct = {this.addNewProduct} />
      </div>
    );
  }
}

export default UploadProduct;
