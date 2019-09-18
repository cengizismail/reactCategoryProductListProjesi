import React, { Component } from 'react'
import { Table,Button  } from 'reactstrap'
export default class Product extends Component {
    
    render() {
        return (
            <div>
                <h3>Product List</h3>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>productName</th>
                            <th>quantityPerUnit</th>
                            <th>unitPrice</th>
                            <th>unitsInStock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            this.props.productList.map((product) => {
                                const a = <tr key={product.id}><th scope="row">{product.id}</th>
                                 <td>{product.productName}</td><td>{product.quantityPerUnit}</td>
                           <td>{product.unitPrice}</td><td>{product.unitsInStock}</td> <Button onClick={()=>this.props.toChart(product)} color="info">add</Button></tr>
                                return a;
                            })


                        }


                    </tbody>
                </Table>
            </div>
        )
    }
}
