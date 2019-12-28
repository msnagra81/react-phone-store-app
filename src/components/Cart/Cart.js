import React, { Component } from 'react';
import {ProductConsumer} from '../../context/context';
import Title from '../functionalComponents/Title'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import CartList from './CartList'
import CartTotals from './CartTotals'

class Cart extends Component {
    render() {
        return (
        <ProductConsumer>{
            (value) =>{
                const {cart} = value;
                if(cart.length >0){
                    return (
                        <React.Fragment>
                            <Title name="Cart" title="items"/>
                            <CartColumns/>
                            <CartList value={value}/>
                            <CartTotals value={value} history={this.props.history}/>
                        </React.Fragment>
                    )   
            }
            else{
                return(
                    <React.Fragment>
                            <EmptyCart/>
                    </React.Fragment>
                )
            } 
        }} 
        </ProductConsumer>
        );
    }
}

export default Cart;