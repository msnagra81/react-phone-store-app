import React, { Component } from 'react';

class CartItem extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {id, img, title, price, total, count} = this.props.product;
        const{incrementQty, decrementQty, removeItem, clearCart} = this.props.value;
        return (
              <div className="row my-1 text-capitalize text-center pt-0">
                  <div className="col-10 mx-auto col-lg-2 border">
                      <img style={{width:"5rem",height: "5rem"}} className="img-fluid" src={img} alt="product image"/>
                  </div>
                  <div className="col-10 mx-auto col-lg-2 border pt-4" >
                      <span className="d-lg-none">Product : </span>{title}
                  </div>
                  <div className="col-10 mx-auto col-lg-2 border pt-4">
                      <span className="d-lg-none">price : </span>${price}
                  </div>
                  
                  <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 border pt-4">
                      <div className="d-flex justify-content-center">
                          <div>
                              <span className="btn btn-black mx-1" onClick={()=>decrementQty(id)}>-</span>
                              <span className="text-blue mx-1">{count}</span>
                              <span className="btn btn-black mx-1" onClick={()=>incrementQty(id)}>+</span>
                          </div>
                      </div>
                  </div>
                  <div className="col-10 mx-auto col-lg-2 border pt-4" onClick={()=>removeItem(id)}>
                      <span className="cart-icon text-danger"><i class="fas fa-trash-alt"></i></span>
                  </div>
                  <div className="col-10 mx-auto col-lg-2 border pt-4">
                      <p className="text-capitalize"><strong>Item Total : ${total}</strong></p>
                  </div>
              </div>  
        );
    }
}

export default CartItem;