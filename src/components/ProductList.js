import React, { Component } from 'react';
import Product from './Product';
import Title from './functionalComponents/Title'
import {ProductConsumer} from '../context/context'
import {Link} from 'react-router-dom'

class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products"></Title>
                        <div className="row">
                            <ProductConsumer className="">
                                {
                                    (value)=>{
                                       return (value.products.map( (product =>{
                                           return <Product key={product.id} product={product}/>
                                       })))
                                    }
                                }
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ProductList;