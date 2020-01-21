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
      <div className = "Profile-container">
        <div className = "Profile-titleContainer u-textCenter">
          <div className = "Profile-title" > {this.state.user.name} </div>
          <div className = "Profile-aboutContainer" >
            <div>About Me</div>
            <div>i have too much clothes but not enough</div>
          </div>
        </div>
        <div> my items: </div>
        <div className = "Profile-cardContainer u-flex-align-center">
          {productsList}
        </div>
      </div>  
    )
  }}

export default Profile;