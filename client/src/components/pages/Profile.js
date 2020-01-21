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

    setUser = () => {
      console.log(this.props.userId);
      get(`/api/user`, { userId: this.props.userId }).then((user) => this.setState({ user: user }));
    }
  
    componentDidMount() {
      document.title = "My Profile";
      get("/api/products", { seller_id : this.props.userId} ).then((productObjs) => {
        productObjs.map((productObj) => {
          this.setState({ products: this.state.products.concat([productObj]) })
        })
      })
  
      this.setUser();
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
          price= {productObj.price}
          seller_name= {productObj.seller.name}
        />
      </div>
    ))
    return (
      <div className = "Profile-container">
        <div className = "u-textCenter">
          <div className = "Profile-title" > hi my name is {this.state.user.name}! my items:</div>
          <div> upload items here: </div>
        </div>
        <div className = "Profile-uploadContainer u-flex-align-center">
          <NewProduct
            addNewProduct={this.addNewProduct}
            user= {this.state.user}
            className = "u-flex-align-center"/>
          {productsList}
        </div>
      </div>  
    )
  }}

export default Profile;