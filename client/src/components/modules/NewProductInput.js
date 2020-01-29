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

  // file preview for uploading files
  handleFileUpload = (event) => {
    var fileReader = new FileReader();
    var fileToPreview = document.getElementById("userFileInput").files[0];
    fileReader.onload = function() {
      document.getElementById("previewFileSpace").src = fileReader.result;
    }
    fileReader.readAsDataURL(fileToPreview);
  }

  // called when the user hits "Submit" for a new post
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit && this.props.onSubmit(this.state.product_name, this.state.price, this.state.description);
    this.setState({
      product_name: "",
      price: "",
      description: "",
    });
  };

  render() {
    return (
      <div className= "u-flex">
        <div id="imageUpload">
          Image Upload:
          <input type="file" id="userFileInput" onChange={this.handleFileUpload}/>
          <br></br>
          <img id="previewFileSpace" src="" height="400"></img>
        </div>
        <div id="descriptionInput">
          <label>
            Product Name:
            <input
              type="text"
              placeholder={this.props.defaultText}
              value={this.state.product_name}
              onChange={this.handleNameChange}
              className="NewPostInput-input"
            />
          </label>
          <label>
          Price: 
            <input
              type="text"
              placeholder={this.props.defaultText}
              value={this.state.price}
              onChange={this.handlePriceChange}
              className="NewPostInput-input"
            />
          </label>
          <lable>
          Description:
            <input
              type="text"
              placeholder={this.props.defaultText}
              value={this.state.description}
              onChange={this.handleDescriptionChange}
              className="NewPostInput-input"
            />
          </lable>
          <br/>
            <button
              type="submit"
              className="NewPostInput-button u-pointer"
              value="Submit"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
        </div>
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
    var file = document.getElementById("userFileInput").files[0];
    var reader = new FileReader();
    var imageURLPost ="";
    var userID = this.props.user._id;
    var userName = this.props.user.name;
    reader.onload = function() {
      imageURLPost = reader.result;
      document.getElementById("previewFileSpace").src = imageURLPost;
      const body = { 
        seller: {
          _id: userID,
          name: userName,
        },
        product_name: product_name,
        price: price,
        description: description,
        imageURL: imageURLPost,
      };
      post("/api/product", body);
    }
    reader.readAsDataURL(file);
  };

  render() {
    return <NewPostInput defaultText="" onSubmit={this.addProduct} />
  }
 }

export { NewProduct };