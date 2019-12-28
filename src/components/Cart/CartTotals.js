import React from 'react';
import {Link} from 'react-router-dom'

function CartTotals({value}) {
    const {cartSubtotal, cartTax, cartTotal, clearCart} = value;
    return (
       <React.Fragment>
           <div className="container">
               <div className="row">
                   <div className="col-10 mt-2 ml-5 ml-md-auto col-sm-8 text-right">
                       <Link to="/">
                           <button onClick={()=>clearCart()} className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button">
                               Clear Cart Totals
                           </button>
                       </Link>
                       <h5>
                           <span className="text-title">SubTotal : </span>
                           <strong>$ {cartSubtotal}</strong>
                       </h5>
                       <h5>
                           <span className="text-title">tax : </span>
                           <strong>$ {cartTax}</strong>
                       </h5>
                       <h5>
                           <span className="text-title">total : </span>
                           <strong>$ {cartTotal}</strong>
                       </h5>
                   </div>
               </div>
           </div>
        
       </React.Fragment>
    );
}

export default CartTotals;