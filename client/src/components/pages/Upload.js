import React, { Component } from "react";
import { get } from "../../utilities";
import Card from "../modules/Card.js";
import { NewProduct } from "../modules/NewProductInput.js";

import "./Upload.css";

class Upload extends Component {
    constructor(props) {
      super(props);
      // Initialize Default State
      this.state = {
        user: undefined,
        products: []
      };
    }

    setUser = () => {
      get(`/api/user`, { userId: this.props.userId }).then((user) => this.setState({ user: user }));
    }
  
    componentDidMount() {
      console.log(this.state.user)
      this.setUser();
      document.title = "My Profile";
      get("/api/products").then((productObjs) => {
        productObjs.filter(productObj => productObj.seller._id === this.props.userId)
        .map((productObj) => {
          this.setState({ products: this.state.products.concat([productObj]) })
        })
      })
    }
      addNewProduct = (productObj) => {
        this.setState({
          products: [productObj].concat(this.state.products),
        });
      };

    componentDidUpdate(oldProps) {
      // this is called whenever the props change (call API again if the userId changes)
      if (oldProps.userId !== this.props.userId) {
        this.setUser();
      }
    }
  
  render() {
    if (!this.state.user) {
      return <div> You must make an account! </div>;
    }
    let productsList = this.state.products.map((productObj) => (
      <div className = "Profile-cardContainer">
        <Card 
          product_name= {productObj.product_name}
          productId = {productObj._id}
          price= {productObj.price}
          seller_name= {productObj.seller.name}
        />
      </div>
    ))
    return (
      <div className = "Upload-container">
        <div className = "Upload-titleContainer u-textCenter u-flex-align-center">
          <div className = "Profile-title" > hi {this.state.user.name}! </div>
          <div> upload new items here! </div>
          <div> items will appear on your profile </div>
        </div>
        <div className = "Profile-uploadContainer u-flex-align-center">
          <NewProduct
            addNewProduct={this.addNewProduct}
            user= {this.state.user}
            className = "u-flex-align-center"/>
        </div>
      </div>  
    )
  }}

export default Upload;
