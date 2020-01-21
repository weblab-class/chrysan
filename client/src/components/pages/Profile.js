import React, { Component } from "react";
import { get } from "../../utilities";
import Card from "../modules/Card.js";
import { NewProduct } from "../modules/NewProductInput.js";

import "./Profile.css";

class Profile extends Component {
    constructor(props) {
      super(props);
      // Initialize Default State
      this.state = {
        user: undefined,
        products: []
      };
    }
  
    componentDidMount() {
      // get(`/api/user`, { userid: this.props.userId }).then((user) => this.setState({ user: user }))
      document.title = "My Profile";
      get("api/products").then((productObjs) => {
        productObjs.map((productObj) => {
          this.setState({ products: this.state.products.concat([productObj]) })
        })
      })
    }

    addNewProduct = (productObj) => {
      this.setState({
        products: [productObj].concat(this.state.products),
      });
    };
  
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
      <div className = "Profile-container">
        <div className = "u-textCenter">
          <div className = "Profile-title" > my items</div>
          <div> upload items here: </div>
        </div>
        <div className = "Profile-uploadContainer u-flex-align-center">
          <NewProduct addNewProduct={this.addNewProduct} className = "u-flex-align-center"/>
          {productsList}
        </div>
      </div>  
    )
  }}

export default Profile;