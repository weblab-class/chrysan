import React, { Component } from "react";

import "./NewProductInput.css";
import { post } from "../../utilities";

/**
 * New Post is a parent component for all input components
 *
 * Proptypes
 * @param {string} defaultText is the placeholder text
 * @param {({value}) => void} onSubmit: (function) triggered when this post is submitted, takes {value} as parameters
 */
class NewPostInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product_name: '',
      price: ''
    };
  }

  // called whenever the user types in the new post input box
  handleNameChange = (event) => {
    this.setState({
      product_name: event.target.value,
    });
    console.log(this.state.product_name)
  };

  handlePriceChange = (event) => {
    this.setState({
      price: event.target.value,
    });
    console.log(this.state.price)
  };

  // called when the user hits "Submit" for a new post
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit && this.props.onSubmit(this.state.product_name, this.state.price);
    this.setState({
      product_name: "",
      price: "",
    });
  };

  render() {
    return (
      <div className= "u-flex">
        Product Name:
        <input
          type="text"
          placeholder={this.props.defaultText}
          value={this.state.product_name}
          onChange={this.handleNameChange}
          className="NewPostInput-input"
        />
        Price:
        <input
          type="text"
          placeholder={this.props.defaultText}
          value={this.state.price}
          onChange={this.handlePriceChange}
          className="NewPostInput-input"
        />
        <button
          type="submit"
          className="NewPostInput-button u-pointer"
          value="Submit"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </div>
    );
  }
}

/**
 * NewName is a New Post component for comments
 *
 * Proptypes
 * @param {string} defaultText is the placeholder text
 */

 class NewProduct extends Component {
  constructor(props) {
    super(props);
  }

  addProduct = (product_name, price) => {
    const body = { 
      product_name: product_name,
      price: price
    };
    post("/api/product", body).then((product) => {
      this.props.addNewProduct(product);
    });
  };

  render() {
    return <NewPostInput defaultText="" onSubmit={this.addProduct} />
  }
 }

export { NewProduct };