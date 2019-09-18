import React, { Component } from "react";
import Navi from "./Navi";
import Product from "./Product";
import Category from "./Category";
import { Col, Row } from "reactstrap";
import alertify from "alertifyjs"
export default class App extends Component {
  state = { categoryId: 1, products: [] ,cart:[]};

  addToChart=(product)=>{
    let newCart= this.state.cart;
    var isadded=newCart.find((item)=>item.product.id===product.id)
    if(isadded)
    {
      isadded.quantity++;
    }

    else
    {
      newCart.push({product:product, quantity:1})
    }
    this.setState({cart:newCart})
    alertify.success(product.productName+" added to chart!",1);
  }
    

  getirCategoryId = (a) => {
    this.setState({ categoryId: a })
    const url = 'http://localhost:3000/products?categoryId=' + this.state.categoryId;
    console.log("aaaaaaaaaaa", url);

    fetch(url).then((response) => response.json()).then((data) => {
      this.setState({ products: data })
    })
  }
  removeCart=(item)=>{
    console.log("item",item)
 let sonuc= this.state.cart.filter((x)=>x.product.id!==item.id)
 console.log("sonuc",sonuc)
 this.setState({cart:sonuc})
  }
  render() {

    return (

      <div className="App">
        <Navi removeCart={this.removeCart} cartData={this.state.cart }/>
        <Row>
          <Col md="3">
            <Category catId={this.state.categoryId} categoryID={this.getirCategoryId} />
          </Col>
          <Col md="9">
            <Product productList={this.state.products}  toChart={this.addToChart} />
          </Col>
        </Row>

      </div>
    );
  }
}
