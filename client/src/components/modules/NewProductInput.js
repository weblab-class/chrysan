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
      price: '',
      description: '',
    };
  }

  // called whenever the user types in the new post input box
  handleNameChange = (event) => {
    this.setState({
      product_name: event.target.value,
    });
  };

  handlePriceChange = (event) => {
    this.setState({
      price: event.target.value,
    });
  };

  handleDescriptionChange = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  // called when the user hits "Submit" for a new post
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit && this.props.onSubmit(this.state.product_name, this.state.price, this.state.description, this.state.fileName);
    this.setState({
      product_name: "",
      price: "",
      description: "",
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
        Description:
        <input
          type="text"
          placeholder={this.props.defaultText}
          value={this.state.description}
          onChange={this.handleDescriptionChange}
          className="NewPostInput-input"
        />
        Image Upload:
        <input type="file" id="userFileInput"/>
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

  addProduct = (product_name, price, description, fileName) => {
    const body = { 
      seller: {
        _id: this.props.user._id,
        name: this.props.user.name,
      },
      product_name: product_name,
      price: price,
      description: description,
    };

    // const body = {
    //   file : document.getElementById("userFileInput").files[0].value,
    //   test : "hello",
    // };
    // post("/api/upload", body).then((fileName) => console.log(fileName));

    // var file = document.getElementById("userFileInput").files[0],
    // read = new FileReader();

    // read.readAsBinaryString(file);
    // console.log(read.result);

    // post("/api/upload", {file_content : `${read.result}`});

    // const fileReader = new FileReader();
    // var file = document.getElementById("userFileInput").files[0];
    // console.log(file);
    //post("/api/upload", {fileName: {fileName}});
    
    post("/api/product", body).then((product) => {
      this.props.addNewProduct(product);
    });
  };

  render() {
    return <NewPostInput defaultText="" onSubmit={this.addProduct} />
  }
 }

export { NewProduct };