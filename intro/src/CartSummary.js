import React, { Component } from 'react';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,
    NavItem,
    NavLink
} from 'reactstrap'

export default class CartSummary extends Component {
    renderSumary() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Your Cart {this.props.cartData.length}
                </DropdownToggle>
                <DropdownMenu right>
                    {
                        this.props.cartData.map((item) =>

                            <DropdownItem key={item.product.id}>
                                 <Badge onClick={()=>this.props.removeCart(item.product)} color="danger">x</Badge>
                                {item.product.productName}
                                <Badge color="success">{item.quantity}</Badge>
                            </DropdownItem>
                        )
                    }

                    <DropdownItem divider />
                    <DropdownItem>
                        Reset
          </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }
    renderEmtyCart() {
        return (
            <NavItem>
                <NavLink>Empty Cart</NavLink>
            </NavItem>
        )
    }
    render() {
        return (
            <div>
            {this.props.cartData.length>0?this.renderSumary():this.renderEmtyCart()}
            </div>
        )
    }
}
