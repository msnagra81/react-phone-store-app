import React, { Component } from 'react';
import {ProductConsumer} from '../context/context'
import { Link } from 'react-router-dom';
import StyledButton from './StyledButton';
import Modal from './Modal';
class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                     const {id, title, img, price, inCart, company, info}= value.detailProduct;
                return <div className="container py-5">
                    <div className="row">
                        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                <h1>{title}</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <img className="img-fluid" src={img} alt="product image"/>
                        </div>
                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h2>Model : {title}</h2>
                <h4 className=" text-uppercase">Manufacturer : {company}</h4>
                <h4 className="text-blue">
                <strong>Price : ${price}</strong>
                </h4>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">More info about product: </p>
                <p className="text-muted lead">{info}</p>
                <div>
                    <Link to="/">
                    <StyledButton>Back To Products</StyledButton>
                    </Link>
                    <StyledButton cart disabled={inCart? true: false} onClick={()=> {
                        value.addToCart(id);
                        value.openModal(id);
                        }}>
                    {inCart ? <p className="mb-0" disabled>{" "}in cart</p> : <p className="mb-0"> Add To Cart</p>}
                    </StyledButton>
                </div>
                        </div>
                    </div>
                </div>
                }
                }
            </ProductConsumer>
        );
    }
}

export default Details;