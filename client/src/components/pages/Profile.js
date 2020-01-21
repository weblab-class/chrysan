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
      // get(`/api/user`, { userid: this.props.userId }).then((user) => this.setState({ user: user }))
      document.title = "My Profile";
      get("api/products").then((productObjs) => {
        productObjs.map((productObj) => {
          this.setState({ products: this.state.products.concat([productObj]) })
        })
      })
      this.setUser();
    }

    componentDidUpdate(oldProps) {
      // this is called whenever the props change (call API again if the userId changes)
      if (oldProps.userId !== this.props.userId) {
        this.setUser();
      }
    }

    addNewProduct = (productObj) => {
      this.setState({
        products: [productObj].concat(this.state.products),
      });
    };
  
  render() {
    if (!this.state.user) {
      return <div> Loading! </div>;
    }
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