import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from "reactstrap"
export default class Category extends Component {
state = {
        categories : []
    };
    getCategory=()=>{
        fetch('http://localhost:3000/categories').then(function(response) {
            return response.json()
          }).then((data)=>{
            this.setState({categories:data});
          });
    }
componentDidMount(){
    this.getCategory();
}
    render() {
        
        return (
            <div>
                <h3>Category List</h3>
                <ListGroup>
                    
                     {
                           this.state.categories.map((item)=>(
                            <ListGroupItem  active={item.id===this.props.catId?true:false}
                            onClick={()=>this.props.categoryID(item.id)} key= {item.id} tag="a" href="#" action >
                            {item.categoryName}</ListGroupItem>
                           ))
                     }
         
                </ListGroup>
            </div>
        )
    }
}
